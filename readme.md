# TableFiller

## A projektről

- Verzió: 1.0.5
- Licence: MIT
- Készitette: Komáromi János

A tablefiller projekt azért jött létre hogy megkönnyitse a felhasználoknak az adatok hozzáadást a táblázathoz. 

## Használata

### Adatok feltöltése
```javascript
tableFill(data,table)
```
`data`: egy tömböt vár amiben objektumok vannak.

`table`: a táblázatunk objektumát fogadja. (Pl: `document.querySelector(".table")`)

### Adatok bővítése
```javascript
insertFill(table,data)
```
`data`: egy tömböt vár amiben objektumok vannak.

`table`: a táblázatunk objektumát fogadja. (Pl: `document.querySelector(".table")`)


### Adatok törlése

```javascript
removeFill(table,[rowid])
```

`table`: a táblázatunk objektumát fogadja. (Pl: `document.querySelector(".table tbody")`)

`rowid`: (Nem kötelező megadni), Ha meg van adva egy id akkor csak azt a sort törli