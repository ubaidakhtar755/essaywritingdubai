<?php

// $data = stripslashes(file_get_contents("php://input"));
// $myData = json_decode($data, true);

sleep(1);


$pTopic  = $_POST['papertopic'];
$pType = $_POST['papertype'];
$pDeadline = $_POST['pDeadline'];
$noPages = $_POST['pages'];
$academicLevel = $_POST['academic'];
$subjet = $_POST['sub'];
$refrence = $_POST['refrence'];
$refrenceStyle = $_POST['refrenceStyle'];
$pMsg = $_POST['papermsg'];
$selecVal = $_POST['rval'];
echo var_dump($_FILES['file']);

if($_FILES['file']){
    $file = rand(111111,99999999);
    move_uploaded_file($_FILES['file']['tmp_name'], "uploads/".$file.$_FILES['file']['name']);
}

echo "<pre>";
echo $pTopic. $pType. $pDeadline. $noPages. $academicLevel. $subjet. $refrence. $refrenceStyle. $pMsg . $selecVal;


if (!empty($pTopic) && !empty($pType) && !empty($pDeadline) && !empty($noPages) && !empty($academicLevel) && !empty($subjet)
&& !empty($refrence) && !empty($refrenceStyle) && !empty($pMsg) &&  !empty($selecVal) && !empty($file)
){
    echo "your form has been submitt.. Thank you! ". $subjet;

}else{
    echo "Please Enter all Fields";
}
?>