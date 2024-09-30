---
title: Verweis auf lokalisierte Nachrichten
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{AddonSidebar}}

Jede internationalisierte Erweiterung enthält mindestens eine Datei namens `messages.json`, die lokalisierte Zeichenfolgen bereitstellt. Diese Seite beschreibt das Format von `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel für eine `messages.json`-Datei aus unserer [notify-link-clicks-i18n Beispielerweiterung](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n). Nur die Felder "_name_" und "message" sind erforderlich.

```json
{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "Shows a notification when the user clicks on links.",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "Click notification",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

## Platzierung

Ihre `messages.json`-Dateien müssen in Verzeichnissen abgelegt werden, die nach dem jeweiligen unterstützenden Gebietsschema benannt sind — `en`, `de`, `ja`, usw. Diese müssen wiederum in einem Verzeichnis namens `_locales` im Wurzelverzeichnis Ihrer Erweiterung abgelegt werden.

## Mitgliederdetails

In diesem Abschnitt werden alle Mitglieder beschrieben, die in einer `messages.json`-Datei vorkommen können.

### name

Jedes oberste Mitglied wird nach dem Namen der Nachrichtenzeichenfolge benannt, die Sie lokalisieren, z.B. `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jeder Name ist nicht auf Groß- und Kleinschreibung beschränkt und fungiert als Schlüssel, mit dem Sie den lokalisierten Nachrichtentext abrufen können.

Der Name kann die folgenden Zeichen enthalten:

- A-Z
- a-z
- 0-9
- \_ (Unterstrich)
- @

> [!NOTE]
> Sie sollten keine Namen definieren, die mit @@ beginnen. Solche Namen sind für [vordefinierte Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#predefined_messages) reserviert.

### message

Mindestens diese Eigenschaft muss für jede Zeichenfolge gesetzt werden. Das `"message"`-Mitglied enthält eine lokalisierte Zeichenfolge, die [Platzhalter](#placeholders) enthalten kann. Sie können verwenden:

- _$placeholder_name$_ (nicht auf Groß- und Kleinschreibung beschränkt), um einen bestimmten Platzhalter (z.B. $URL$ im obigen Beispiel) in Ihre Zeichenfolge einzufügen.
- `$1`, `$2`, `$3`, usw., um Werte direkt aus einem Aufruf von {{WebExtAPIRef("i18n.getMessage()")}} in Ihre Zeichenfolge einzufügen.

Weitere wichtige Punkte:

- Jede Anzahl aufeinanderfolgender Dollarzeichen in Zeichenfolgen wird durch die gleiche Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$, usw.
- Wenn die Lokalisierungsdatei gelesen wird, werden Token, die mit `/\$([a-z0-9_@]+)\$/i` übereinstimmen, durch den entsprechenden Wert aus dem "placeholders"-Objekt der Zeichenfolge ersetzt. Diese Ersetzungen erfolgen vor der Verarbeitung von `/\$\d/`-Token in der Nachricht.
- Wenn eine lokalisierte Zeichenfolge verwendet wird, werden Token, die mit `/\$\d+/` übereinstimmen, durch die Ersetzungen ersetzt, die an {{WebExtAPIRef("i18n.getMessage()")}} übergeben werden.
- `getMessage()` verarbeitet keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen.

### description

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenfolge enthalten, um dem Übersetzer zu helfen, die bestmögliche Übersetzung der Zeichenfolge zu erstellen.

### placeholders

{{optional_inline}}

Das `"placeholders"`-Mitglied definiert eine oder mehrere Platzhalter-Teilzeichenfolgen, die innerhalb der Nachricht verwendet werden sollen — diese können verwendet werden, um Elemente, die nicht übersetzt werden sollen, fest zu kodieren oder um auf Variablen zu verweisen.

Jede Platzhalter-Teilzeichenfolgendefinition hat eine Reihe von eigenen Werten:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### placeholder name

Der Platzhaltername wird verwendet, um den Platzhalter in der Ersetzungszeichenfolge darzustellen (z.B. wird `"url"` zu `$url$`). Er ist nicht auf Groß- und Kleinschreibung beschränkt und kann die gleichen Zeichen wie ein Nachrichtenzeichenfolgen [Name](#name) enthalten.

#### content

Das "content"-Element definiert den Inhalt des Platzhalters. Dies kann eine fest codierte Zeichenfolge sein, wie "Mein Platzhalter", aber es kann auch Werte enthalten, die aus einem Aufruf von {{WebExtAPIRef("i18n.getMessage()")}} erhalten werden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtenzeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

Das optionale "example"-Element soll erneut den Übersetzern helfen, indem es ihnen ein Beispiel zeigt, wie der Platzhalter für Endbenutzer erscheinen würde, sodass sie die beste Wahl bei der Lokalisierung der Datei treffen können.
