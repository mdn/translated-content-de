---
title: Datumsformatierung mit Luxon
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Die Standardanzeige von Daten aus unseren Modellen ist sehr unansehnlich: _Mon Apr 10 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In diesem Abschnitt zeigen wir, wie Sie die _Buchinstanz-Liste_-Seite aus dem vorherigen Abschnitt aktualisieren können, um das `due_date`-Feld in einem freundlicheren Format darzustellen: Apr 10th, 2023.

Der Ansatz, den wir verwenden werden, ist die Erstellung einer virtuellen Eigenschaft in unserem `BookInstance`-Modell, die das formatierte Datum zurückgibt. Die eigentliche Formatierung führen wir mit [luxon](https://www.npmjs.com/package/luxon) durch, einer leistungsstarken, modernen und benutzerfreundlichen Bibliothek zum Parsen, Validieren, Manipulieren, Formatieren und Lokalisieren von Daten.

> [!NOTE]
> Es ist möglich, _luxon_ zu verwenden, um die Strings direkt in unseren Pug-Vorlagen zu formatieren, oder wir könnten den String an verschiedenen anderen Stellen formatieren. Die Verwendung einer virtuellen Eigenschaft ermöglicht es uns, das formatierte Datum genau so zu erhalten, wie wir derzeit das `due_date` erhalten.

## Luxon installieren

Geben Sie den folgenden Befehl im Root-Verzeichnis des Projekts ein:

```bash
npm install luxon
```

## Die virtuelle Eigenschaft erstellen

1. Öffnen Sie **./models/bookinstance.js**.
2. Importieren Sie _luxon_ am Anfang der Datei.

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
> Luxon kann Strings in vielen Formaten importieren und sowohl in vordefinierten als auch frei gestalteten Formaten exportieren. In diesem Fall verwenden wir `fromJSDate()`, um einen JavaScript-Datumsstring zu importieren, und `toLocaleString()`, um das Datum im `DATE_MED`-Format in Englisch auszugeben: Apr 10th, 2023.
> Für Informationen über andere Formate und Internationalisierung von Datumsstrings siehe die Luxon-Dokumentation zum [Formatieren](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting).

## Die Ansicht aktualisieren

Öffnen Sie **/views/bookinstance_list.pug** und ersetzen Sie `due_back` durch `due_back_formatted`.

```pug
      if val.status != 'Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

Das war's. Wenn Sie im Seitenmenü zu _Alle Buchinstanzen_ gehen, sollten Sie jetzt sehen, dass alle Fälligkeitsdaten deutlich ansprechender sind!

## Nächste Schritte

- Kehren Sie zurück zur [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Fahren Sie fort mit dem nächsten Unterartikel von Teil 5: [Autorenseiteliste und Genre-Seitenliste Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
