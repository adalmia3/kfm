﻿/*
 * Licensed under the terms of the GNU Lesser General Public License:
 * 
	http:
 *
 * For further information visit:
 * 
	http:
 *
 * File Name: fr.js
 * 
	French language file.
 *
 * File Authors:
 * 
	liane
 */

var kfm_lang=
{
Dir:
	"ltr", 
ErrorPrefix:
	"erreur: ",

Directories:
	"Dossiers",
CurrentWorkingDir:
	'Dossier Actuel: "%1"',
Logs:
	"Messages",
FileUpload:
	"Envoi de fichier",
DirEmpty:
	'aucun fichier dans "%1"',

CreateSubDir:
	"nouveau sous-dossier",
DeleteDir:
	"supprimer",
RenameDir:
	"renommer",

DeleteFile:
	"supprimer",
RenameFile:
	"renommer",
RotateClockwise:
	"rotation sens horaire",
RotateAntiClockwise:
	"rotation sens anti-horaire",
ResizeImage:
	"redimensionner l'image",
ChangeCaption:
	"modifier le titre",

WhatFilenameToCreateAs:
	"Créer le fichier sous quel nom?",
AskIfOverwrite:
	'Le fichier "%1" existe déjà. Remplacer?',
NoForwardslash:
	"\nVous ne pouvez pas utiliser '/' dans le nom du fichier",

CreateDirMessage:
	'Créer un sous-dossier de "%1": ',
DelDirMessage:
	'Etes-vous certain de vouloir supprimer le dossier "%1"?',
DelFileMessage:
	'Etes-vous certain de vouloir supprimer le fichier "%1"?',
DelMultipleFilesMessage:
	"Etes-vous certain de vouloir supprimer les fichiers suivants?\n\n'",
DownloadFileFromMessage:
	"Télécharger le fichier de quel emplacement?",
FileSavedAsMessage:
	"Sous quel nom désirez-vous enregistrer le fichier?",

CurrentSize:
	'Taille Actuelle: "%1" x "%2"\n',
NewWidth:
	"Nouvelle Largeur?",
NewWidthConfirmTxt:
	'Nouvelle Largeur: "%1"\n',
NewHeight:
	"Nouvelle Hauteur?",
NewHeightConfirmTxt:
	'Nouvelle Hauteur: "%1"\n\nLes informations sont-elles exactes?',

RenamedFile:
	'fichier "%1" renommé en "%2".',
DirRefreshed:
	"dossiers actualisés.",
FilesRefreshed:
	"fichiers actualisés.",
NotMoreThanOneFile:
	"erreur: vous ne pouvez choisir qu'un fichier à la fois",
UnknownPanelState:
	"erreur: état du panneau inconnu.",
MissingDirWrapper:
	'erreur: dossier parent manquant: "kfm_directories%1".',
SetStylesError:
	'erreur: impossible d\'attribuer "%2" à "%1".',
NoPanel:
	'erreur: le panneau "%1" n\'existe pas.',
FileSelected:
	'fichier sélectionné: "%1"',
log_ChangeCaption:
	'titre de "%1" modifié en "%2"',
UrlNotValidLog:
	'erreur: l\'URL doit commencer par "http:"',
MovingFilesTo:
	'fichiers ["%1"] déplacés dans "%2"',

DirectoryNameExists:
	"un dossier de ce nom existe déjà.",
FileNameNotAllowd:
	"erreur: nom de fichier incorrect",
CouldNotWriteFile:
	'erreur: impossible d\'écrire le fichier "%1".',
CouldNotRemoveDir:
	"Impossible de supprimer le dossier.\nAssurez-vous qu'il est vide",
UrlNotValid:
	'erreur: l\'URL doit commencer par "http:"',
CouldNotDownloadFile:
	'erreur: impossible de télécharger le fichier "%1".',
FileTooLargeForThumb:
	'erreur: "%1" est trop gros pour créer une vignette. Veuillez remplacer ce fichier par une version plus petite.',
CouldntReadDir:
	"erreur: impossible de lire ce dossier",
CannotRenameFile:
	'erreur: impossible de renommer "%1" en "%2"',
FilenameAlreadyExists:
	"erreur: un fichier de ce nom existe déjà",

// new in 0.5
EditTextFile:
	"Editer fichier texte",
CloseWithoutSavingQuestion:
	"Etes-vous certain de vouloir fermer sans enregistrer?",
CloseWithoutSaving:
	"Fermer sans enregistrer",
SaveThenClose:
	"Enregistrer, puis fermer",
SaveThenCloseQuestion:
	"Etes-vous certain de vouloir enregistrer vos modifications?",

// new in 0.6
LockPanels:
	"verrouiller les panneaux",
UnlockPanels:
	"déverrouiller les panneaux",
CreateEmptyFile:
	"créer un fichier vide",
DownloadFileFromUrl:
	"télécharger un fichier",
DirectoryProperties:
	"Propriétés de Dossier",
SelectAll:
	"tout sélectionner",
SelectNone:
	"tout désélectionner",
InvertSelection:
	"inverser la sélection",
LoadingKFM:
	"chargement de KFM",
Name:
	"Nom",
FileDetails:
	"Propriétés de Fichier",
Search:
	"Chercher",
IllegalDirectoryName:
	"Nom de dossier incorrect \"%1\"",
RecursiveDeleteWarning:
	"\"%1\" n'est pas vide\nVoulez-vous vraiment le supprimer ainsi que tout son contenu?\n*ATTENTION* CECI EST IRREVERSIBLE",
RmdirFailed:
	"impossible de supprimer le dossier \"%1\"",
DirNotInDb:
	"dossier inconnu dans la base de données",
ShowPanel:
	"afficher le panneau \"%1\"",
ChangeCaption:
	"Changer le Titre",
NewDirectory:
	"Nouveau Dossier",
Upload:
	"Envoyer",
NewCaptionIsThisCorrect:
	"Nouveau titre:\n%1\n\nEst-ce correct?",
Close:
	"fermer",
Loading:
	"chargement",
AreYouSureYouWantToCloseKFM:
	"Voulez-vous vraiment fermer la fenêtre KFM?",
PleaseSelectFileBeforeRename:
	"Veuillez sélectionner un fichier avant de renommer",
RenameOnlyOneFile:
	"Vous ne pouvez renommer qu'un fichier à la fois",
RenameFileToWhat:
	"Renommer le fichier \"%1\" en?",
NoRestrictions:
	"aucune restriction",
Filename:
	"nom de fichier",
Maximise:
	"agrandir",
Minimise:
	"réduire",
AllowedFileExtensions:
	"extensions permises",
Filesize:
	"taille",
MoveDown:
	"descendre",
Mimetype:
	"type MIME",
MoveUp:
	"monter",
Restore:
	"restorer",
Caption:
	"titre",
CopyFromURL:
	"Copier d'un URL",
ExtractZippedFile:
	"Décompresser le fichier",

// new in 0.8
ViewImage:
	"voir l'image",
ReturnThumbnailToOpener:
	"renvoyer une vignette à l'éditeur",
AddTagsToFiles:
	"ajouter des mots-clés au(x) fichier(s)",
RemoveTagsFromFiles:
	"remove tags from file(s)",
HowWouldYouLikeToRenameTheseFiles:
	"Comment souhaitez-vous renommer ces fichiers?\n\nexample: \"images-***.jpg\" les renommera en \"images-001.jpg\", \"images-002.jpg\", ...",
YouMustPlaceTheWildcard:
	"Vous devez utiliser le caractère joker * dans le modèle de nom",
YouNeedMoreThan:
	"Vous devez utiliser plus de %1 caractères * pour créer %2 noms",
NoFilesSelected:
	"aucun fichier sélectionné",
Tags:
	"mots-clés",
IfYouUseMultipleWildcards:
	"Si vous utilisez plusieurs jokers dans le modèle de nom, ils doivent être regroupés",
NewCaption:
	"Nouveau Titre",
WhatMaximumSize:
	"Quelle taille maximum devrait être retournée?",
CommaSeparated:
	"separé par des virgules",
WhatIsTheNewTag:
	"Quel est le nouveau mot-clé?\nPour plusieurs mots-clés, séparez-les avec des virgules.",
WhichTagsDoYouWantToRemove:
	"Quel mots-clés voulez-vous enlever?\nPour plusieurs mots-clés, séparez-les avec des virgules."
}
