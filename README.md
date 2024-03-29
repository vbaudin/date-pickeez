# Date Pickeez



# Description

Projet visant à remplacer le Date Picker actuel car trop compliqué à maintenir à cause du fait que trop de cas d'utilisations sont différents ou ont des manières d'être gérées trop différentes.

Le but est, à terme d'avoir un seul composant DatePicker qui permettras grâce aux props données en paramètre ainsi qu'au comportement qui en découleras dans le Context associé, de faire en sorte que l'on puisse gérer tous les besoins de récupération de dates présents sur Localeez-Web.

Voici les cas d'utilisation d'un Date Picker recensés sur Localeez-Web.



# Récap des différentes pages



## Page Rapports


### Pré-requis
- Besoin de recevoir en amont la liste des types de plages disponibles [year, month, week, day, custom(avec heures)].
- Impossibilitée de choisir une date future par rapport à notre date actuelle.


### Plage Year
#### Besoins
Choisir une année entière du 1er Janvier 00h00 au 31 Décembre 23h59

#### Solutions Envisagées
Garder le même comportement qu'actuellement. C'est à dire au clique sur le composant que l'on nommeras __\<DateField />__ le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année souhaitée parmis la liste présente.


### Plage Month
#### Besoins
Choisir un mois entier du 1er jour 00h00 au dernier jour 23h59

#### Solutions Envisagées
1. Garder le même comportement qu'actuellement. C'est à dire au clique sur le composant que l'on nommeras __\<DateField />__ le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités parmis la liste présente.
2. Faire en sorte que maintenant le composant __\<Calendar />__ montre tous les jours du mois sous la forme d'un calendrier, et les surlignes pour bien montrer que tous les jours du mois sont pris en compte.


### Plage Week
#### Besoins
Choisir une semaine entière du Lundi 00h00 au Dimanche 23h59

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir une semaine en cliquant simplement sur un jour de la semaine.


### Plage Day
#### Besoins 
Choisir un jour précis de 00h00 jusqu'à 23h59


#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour en cliquant simplement sur un jour de la semaine.


### Plage Custom (avec choix de l'heure de début et de fin)
#### Besoins
Choisir un jour et une heure précis de début et de fin.

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour ainsi qu'une heure en cliquant simplement sur un jour de la semaine. Il faudras ensuite cliquer sur le deuxieme composant __\<DateField />__ qui permettras maintenant grâce à la même manipulation qu'avec le premier, de choisir le jour et l'heure de fin.



## Widgets MFA


### Pré-requis
- Accès aux plages [last_day, last_week, last_month, last_year, custom (sans choix de l'heure), none].
- Impossibilitée de choisir une date future par rapport à notre date actuelle.


### Plage Last_Day
#### Besoins
Recupérer comme date de départ -1 jour, et date de fin jour J.

#### Solutions Envisagées
Garder le même cas qu'actuellement.


### Plage Last_Week
#### Besoins
Recupérer comme date de départ -7 jours, et date de fin jour J.

#### Solutions Envisagées
Garder le même cas qu'actuellement.


### Plage Last_Month
#### Besoins
Recupérer comme date de départ -30 jours, et date de fin jour J.

#### Solutions Envisagées
Garder le même cas qu'actuellement.


### Plage Last_Year
#### Besoins
Recupérer comme date de départ -365 jours, et date de fin jour J.

#### Solutions Envisagées
Garder le même cas qu'actuellement.


### Plage Custom (sans choix de l'heure de début et de fin)
#### Besoins
Choisir un jour précis de début et de fin.

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour en cliquant simplement sur un jour de la semaine. Il faudras ensuite cliquer sur le deuxieme composant __\<DateField />__ qui permettras maintenant grâce à la même manipulation qu'avec le premier, de choisir le jour de fin.


### Plage None
#### Besoins
Ne pas choisir de dates.

#### Solutions Envisagées
Garder le même cas qu'actuellement.



## Partners


### Pré-requis
- Aucun
- Simplement accès à une plage custom (sans choix de l'heure)
- On peut ne pas renseigner de début et/ou de fin


### Plage Custom (sans choix de l'heure de début et de fin)
#### Besoins
Choisir un jour précis de début et de fin.

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour en cliquant simplement sur un jour de la semaine. Il faudras ensuite cliquer sur le deuxieme composant __\<DateField />__ qui permettras maintenant grâce à la même manipulation qu'avec le premier, de choisir le jour de fin.



## Map Event List


### Pré-requis
- Accès aux plages [day, custom (avec choix de l'heure)]
- Impossibilitée de choisir une date future par rapport à notre date actuelle.


### Plage Day
#### Besoins 
Choisir un jour précis de 00h00 jusqu'à 23h59

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour en cliquant simplement sur un jour de la semaine.


### Plage Custom (avec choix de l'heure de début et de fin)
#### Besoins
Choisir un jour et une heure précis de début et de fin.

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour ainsi qu'une heure en cliquant simplement sur un jour de la semaine. Il faudras ensuite cliquer sur le deuxieme composant __\<DateField />__ qui permettras maintenant grâce à la même manipulation qu'avec le premier, de choisir le jour et l'heure de fin.



## Accréditations


### Pré-requis
- N'as accès qu'à la plage [day]
- Impossibilitée de choisir une date passée par rapport à notre date actuelle.


### Plage Day
#### Besoins 
Choisir un jour précis de 00h00 jusqu'à 23h59

#### Solutions Envisagées
Au clique sur le composant que l'on nommeras __\<DateField />__, le composant __\<Calendar />__ s'ouvriras permettant de choisir l'année et le mois souhaités, puis enfin sur le calendrier nous pourrons choisir un jour en cliquant simplement sur un jour de la semaine.



# Architecture de la solution envisagée



## Context __\<DatePickerContext />__

### States
- rangeTypes(['string']) : Tableau contenant le choix de ranges. Si un seul choix possible, le composant __\<RangeField />__ est caché et rangeChoice est forcément égal à rangeTypes[0]
- rangeChoice('string') : Contient la range choisie par l'utilisateur parmis rangeTypes
- startDate('bool'): True si besoin d'une date de début, sinon false et prendras à partir du timestamp 0
- endDate('bool'): True si besoin d'une date de fin, sinon false et prendras à partir du timestamp actuel.
- currentDate('Date'): Objet Date correspondant à où l'on se trouve sur le composant __\<Calendar />__.
- selectedStartDate('Date'): Objet Date correspondant au choix fait pour la date de départ.
- selectedEndDate('Date'): Objet Date correspondant au choix fait pour la date de fin.
- isCalendarOpen('bool'): Permet d'afficher ou non le composant __\<Calendar />__
- fieldFocused('string'): Name du composant __\<DateField />__ actuellement selectionné.



## Composant __\<DatePicker />__

## Composant __\<DateField />__

## Composant __\<RangeField />__

## Composant __\<Calendar />__