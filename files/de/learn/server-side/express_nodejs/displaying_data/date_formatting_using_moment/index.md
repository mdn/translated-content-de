---
title: Datumsformatierung mit luxon
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Die standardmäßige Darstellung von Daten aus unseren Modellen ist sehr unansehnlich: _Mon Apr 10 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In diesem Abschnitt zeigen wir, wie Sie die _BookInstance List_ Seite aus dem vorherigen Abschnitt aktualisieren können, um das Feld `due_date` in einem freundlicheren Format anzuzeigen: Apr 10th, 2023.

Der Ansatz, den wir verwenden werden, besteht darin, eine virtuelle Eigenschaft in unserem `BookInstance` Modell zu erstellen, die das formatierte Datum zurückgibt. Wir werden die tatsächliche Formatierung mit [luxon](https://www.npmjs.com/package/luxon) durchführen, einer leistungsstarken, modernen und benutzerfreundlichen Bibliothek zum Parsen, Validieren, Bearbeiten, Formatieren und Lokalisieren von Daten.

> [!NOTE]
> Es ist möglich, _luxon_ zu verwenden, um die Zeichenfolgen direkt in unseren Pug-Vorlagen zu formatieren, oder wir könnten die Zeichenfolge an verschiedenen anderen Stellen formatieren. Die Verwendung einer virtuellen Eigenschaft ermöglicht es uns, das formatierte Datum genau auf die gleiche Weise abzurufen, wie wir derzeit das `due_date` abrufen.

## Luxon installieren

Geben Sie den folgenden Befehl im Projekt-Stammverzeichnis ein:

```bash
npm install luxon
```

## Die virtuelle Eigenschaft erstellen

1. Öffnen Sie **./models/bookinstance.js**.
2. Importieren Sie _luxon_ am Anfang der Seite.

   ```js
   const { DateTime } = require("luxon");
   ```

Fügen Sie die virtuelle Eigenschaft `due_back_formatted` direkt nach der URL-Eigenschaft hinzu.

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
```

> [!NOTE]
> Luxon kann Zeichenfolgen in vielen Formaten importieren und sowohl in vordefinierte als auch in frei definierte Formate exportieren. In diesem Fall verwenden wir `fromJSDate()`, um eine JavaScript-Datumzeichenfolge zu importieren, und `toLocaleString()`, um das Datum im `DATE_MED` Format auf Englisch auszugeben: Apr 10th, 2023.
> Für Informationen über andere Formate und die Internationalisierung von Datumzeichenfolgen siehe die Luxon-Dokumentation zum [Formatieren](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting).

## Die Ansicht aktualisieren

Öffnen Sie **/views/bookinstance_list.pug** und ersetzen Sie `due_back` durch `due_back_formatted`.

```pug
      if val.status != 'Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

Das war's. Wenn Sie im Seitenmenü zu _Alle Buchinstanzen_ gehen, sollten Sie jetzt sehen, dass alle Fälligkeitsdaten viel ansprechender sind!

## Nächste Schritte

- Kehren Sie zurück zum [Express Tutorial Teil 5: Anzeigung von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Autorenlisten-Seite und Genrelisten-Seite Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
