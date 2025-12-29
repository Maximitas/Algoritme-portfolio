Selection sort har jeg valgt

Det er at man har to array, den givne array der sskal sorters og den array der er færdig sorteret.

Algoritmen gå hele den usorteret array igennem for at finde det aller mindste tal,

det tal bliver så at ind på det sorteret array og man kører så videre

https://en.wikipedia.org/wiki/Selection_sort


Pseudokode.


Man tager det første tal i rækken og sammeligner det så med tallet til højre.

Er det nye tal højere går man bare videre, er det mindre gemmer man det i en temp.

Man går så videre til array er slut, hvis man fandt et nyt tal der er mindre end temp overskriver man temp med det nye mindste tal.

Når hele arrayt er kigget igennem gemmer man det tal på den første plads i sit sortet array og begynder så på plads to eller index 1.




BigO er O(n^2)

Algoritmen bliver nød til at gå hele arrayet igennem og fordi den kører loop i et loop så er det n^2

