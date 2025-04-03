---
title: Sprachspezifische Nachrichtenreferenz
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Jede internationalisierte Erweiterung hat mindestens eine Datei mit dem Namen `messages.json`, die sprachspezifische Zeichenketten bereitstellt. Diese Seite beschreibt das Format von `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n]-Leitfaden(/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel einer `messages.json`-Datei, entnommen aus unserer [notify-link-clicks-i18n Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)-Erweiterung. Nur die Felder "_name_" und "message" sind erforderlich.

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

Ihre `messages.json`-Dateien müssen in Verzeichnissen abgelegt werden, die nach dem jeweiligen unterstützten Gebietsschema benannt sind — `en`, `de`, `ja` usw. Diese müssen wiederum in einem Verzeichnis namens `_locales` im Stammverzeichnis Ihrer Erweiterung platziert werden.

## Mitgliederdetails

Dieser Abschnitt beschreibt jedes Mitglied, das in einer `messages.json`-Datei erscheinen kann.

### name

Jedes oberste Mitglied ist nach dem Namen der Nachricht benannt, die Sie lokalisieren, zum Beispiel `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jedes Namensfeld ist nicht case-sensitiv und fungiert als Schlüssel, der es Ihnen ermöglicht, den lokalisierten Nachrichtentext abzurufen.

Der Name kann die folgenden Zeichen enthalten:

- A-Z
- a-z
- 0-9
- \_ (Unterstrich)
- @

> [!NOTE]
> Sie sollten keine Namen definieren, die mit @@ beginnen. Solche Namen sind für [vordefinierte Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#predefined_messages) reserviert.

### message

Mindestens diese Eigenschaft muss für jede Zeichenkette festgelegt werden. Das Mitglied `"message"` enthält eine lokalisierte Zeichenkette, die [Platzhalter](#placeholders) enthalten kann. Sie können verwenden:

- _$placeholder_name$_ (nicht case-sensitiv), um einen bestimmten Platzhalter (zum Beispiel $URL$ im obigen Beispiel) in Ihre Zeichenkette einzufügen.
- `$1`, `$2`, `$3` usw. um direkt Werte aus einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf in Ihre Zeichenkette einzufügen.

Weitere wichtige Punkte:

- Eine beliebige Anzahl aufeinanderfolgender Dollarzeichen in Zeichenketten wird durch dieselbe Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$ usw.
- Wenn die Gebietsdatei gelesen wird, werden Tokens, die auf `/\$([a-z0-9_@]+)\$/i` passen, durch den entsprechenden Wert aus dem "placeholders"-Objekt der Zeichenkette ersetzt. Diese Ersetzungen passieren vor der Verarbeitung von Tokens der Form `/\$\d/` in der Nachricht.
- Wenn eine Gebietszeichenkette verwendet wird, werden Tokens, die auf `/\$\d+/` passen, durch die Ersetzungen ersetzt, die an {{WebExtAPIRef("i18n.getMessage()")}} übergeben wurden.
- `getMessage()` wird keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen verarbeiten.

### description

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenkette enthalten, die dem Übersetzer helfen soll, die bestmögliche Übersetzung der Zeichenkette zu erstellen.

### placeholders

{{optional_inline}}

Das Mitglied `"placeholders"` definiert ein oder mehrere Platzhalter-Teilzeichenfolgen, die innerhalb der Nachricht verwendet werden können — diese können genutzt werden, um Elemente, die nicht übersetzt werden sollen, fest zu codieren oder um auf Variablen zu verweisen.

Jede Platzhalter-Teilzeichenfolgendefinition hat eine Anzahl von eigenen Werten:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### placeholder name

Der Name des Platzhalters wird verwendet, um den Platzhalter in der Ersetzungszeichenfolge darzustellen (z.B. wird `"url"` zu `$url$`). Er ist nicht case-sensitiv und kann dieselben Zeichen wie ein Nachrichtenzeichenskettenname [name](#name) enthalten.

#### content

Das "content"-Element definiert den Inhalt des Platzhalters. Dies kann eine fest codierte Zeichenkette sein, wie "My placeholder", es kann aber auch Werte enthalten, die von einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf erhalten wurden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtenzeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

Das optionale "example"-Element soll wiederum Übersetzern helfen, indem es zeigt, wie der Platzhalter für Endbenutzer erscheinen würde, sodass sie die beste Wahl bei der Lokalisierung der Datei treffen können.
