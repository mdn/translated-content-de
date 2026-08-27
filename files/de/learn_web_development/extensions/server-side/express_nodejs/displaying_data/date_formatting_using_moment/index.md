---
title: Datumsformatierung mit luxon
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

Die standardmäßige Darstellung von Daten aus unseren Modellen ist sehr unschön: _Mon Apr 10 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In diesem Abschnitt zeigen wir, wie Sie die _BookInstance List_ Seite aus dem vorherigen Abschnitt aktualisieren können, um das Feld `due_date` in einem benutzerfreundlicheren Format darzustellen: Apr 10th, 2023.

Unser Ansatz besteht darin, eine virtuelle Eigenschaft in unserem `BookInstance`-Modell zu erstellen, die das formatierte Datum zurückgibt. Wir verwenden [luxon](https://www.npmjs.com/package/luxon), eine leistungsstarke, moderne und benutzerfreundliche Bibliothek zum Parsen, Validieren, Manipulieren, Formatieren und Lokalisieren von Daten, um die eigentliche Formatierung vorzunehmen.

> [!NOTE]
> Es ist möglich, _luxon_ zu verwenden, um die Zeichenfolgen direkt in unseren Pug-Vorlagen zu formatieren, oder wir könnten die Zeichenfolge an mehreren anderen Stellen formatieren. Durch die Verwendung einer virtuellen Eigenschaft können wir das formatierte Datum auf genau die gleiche Weise abrufen, wie wir derzeit das `due_date` erhalten.

## Luxon installieren

Geben Sie den folgenden Befehl im Stammverzeichnis des Projekts ein:

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
> Luxon kann Zeichenfolgen in vielen Formaten importieren und sowohl in vordefinierten als auch in frei formatierten Formaten exportieren. In diesem Fall verwenden wir `fromJSDate()`, um eine JavaScript-Datumskette zu importieren, und `toLocaleString()`, um das Datum im `DATE_MED` Format in Englisch auszugeben: Apr 10th, 2023.
> Informationen zu anderen Formaten und zur Internationalisierung von Datumszeichenfolgen finden Sie in der Luxon-Dokumentation zum [Formatieren](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting).

## Ansicht aktualisieren

Öffnen Sie **/views/bookinstance_list.pug** und ersetzen Sie `due_back` durch `due_back_formatted`.

```pug
      if val.status != 'Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

Das war's. Wenn Sie in der Seitenleiste zu _All book-instances_ gehen, sollten Sie nun sehen, dass alle Fälligkeitsdaten deutlich attraktiver sind!

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Herausforderung der Autorenseite und Genres-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
