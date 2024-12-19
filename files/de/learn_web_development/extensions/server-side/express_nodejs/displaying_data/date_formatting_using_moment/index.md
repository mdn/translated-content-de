---
title: Datumsformatierung mit luxon
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Die Standardanzeige von Daten aus unseren Modellen ist sehr unattraktiv: _Mon Apr 10 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In diesem Abschnitt zeigen wir, wie Sie die Seite _Buchinstanzliste_ aus dem vorherigen Abschnitt aktualisieren können, um das Feld `due_date` in einem freundlicheren Format darzustellen: Apr 10th, 2023.

Der Ansatz, den wir verwenden werden, ist das Erstellen einer virtuellen Eigenschaft in unserem `BookInstance`-Modell, die das formatierte Datum zurückgibt. Wir werden das eigentliche Formatieren mit [luxon](https://www.npmjs.com/package/luxon) durchführen, einer leistungsstarken, modernen und benutzerfreundlichen Bibliothek zum Parsen, Validieren, Manipulieren, Formatieren und Lokalisieren von Daten.

> [!NOTE]
> Es ist möglich, _luxon_ zu verwenden, um die Zeichenfolgen direkt in unseren Pug-Vorlagen zu formatieren, oder wir könnten die Zeichenfolge an mehreren anderen Stellen formatieren. Die Verwendung einer virtuellen Eigenschaft ermöglicht es uns, das formatierte Datum auf genau die gleiche Weise zu erhalten wie derzeit das `due_date`.

## Luxon installieren

Geben Sie den folgenden Befehl im Stammverzeichnis des Projekts ein:

```bash
npm install luxon
```

## Erstellen der virtuellen Eigenschaft

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
> Luxon kann Zeichenfolgen in vielen Formaten importieren und sowohl in vordefinierten als auch in frei gestaltbaren Formaten exportieren. In diesem Fall verwenden wir `fromJSDate()`, um eine JavaScript-Datum-Zeichenfolge zu importieren und `toLocaleString()`, um das Datum im `DATE_MED`-Format in Englisch auszugeben: Apr 10th, 2023.
> Für Informationen über andere Formate und die Internationalisierung von Datumszeichenfolgen sehen Sie in der Luxon-Dokumentation zum [Formatieren](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting) nach.

## Die Ansicht aktualisieren

Öffnen Sie **/views/bookinstance_list.pug** und ersetzen Sie `due_back` durch `due_back_formatted`.

```pug
      if val.status != 'Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

Das war's. Wenn Sie zu _Alle Buchinstanzen_ in der Seitenleiste gehen, sollten Sie nun sehen, dass alle Fälligkeitsdaten viel attraktiver sind!

## Nächste Schritte

- Kehren Sie zurück zu [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie mit dem nächsten Unterartikel von Teil 5 fort: [Autorenlisten-Seite und Genreslisten-Seite Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
