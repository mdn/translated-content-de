---
title: Referenz für ortsspezifische Nachrichten
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{AddonSidebar}}

Jede internationalisierte Erweiterung hat mindestens eine Datei mit dem Namen `messages.json`, die ortsspezifische Zeichenketten bereitstellt. Diese Seite beschreibt das Format von `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel einer `messages.json`-Datei, entnommen aus unserer [notify-link-clicks-i18n Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung. Nur die Felder „_name_“ und „message“ sind erforderlich.

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

Ihre `messages.json`-Dateien müssen in Verzeichnissen abgelegt werden, die nach dem jeweiligen unterstützten Gebietsschema benannt sind — `en`, `de`, `ja` usw. Diese wiederum müssen sich in einem Verzeichnis namens `_locales` im Stammverzeichnis Ihrer Erweiterung befinden.

## Mitgliederdetails

Dieser Abschnitt beschreibt jedes Mitglied, das in einer `messages.json`-Datei erscheinen kann.

### Name

Jedes oberste Mitglied wird nach dem Namen der Nachrichtenzeichenkette benannt, die Sie lokalisiert haben, zum Beispiel `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jeder Name ist nicht case-sensitiv und fungiert als Schlüssel, mit dem Sie den lokalisierten Nachrichtentext abrufen können.

Der Name kann die folgenden Zeichen enthalten:

- A-Z
- a-z
- 0-9
- \_ (Unterstrich)
- @

> [!NOTE]
> Sie sollten keine Namen definieren, die mit @@ beginnen. Solche Namen sind für [vordefinierte Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#predefined_messages) reserviert.

### Nachricht

Mindestens diese Eigenschaft muss für jede Zeichenkette gesetzt werden. Das `"message"`-Mitglied enthält eine lokalisierte Zeichenkette, die [Platzhalter](#platzhalter) enthalten kann. Sie können verwenden:

- _$placeholder_name$_ (nicht case-sensitiv), um einen bestimmten Platzhalter (zum Beispiel $URL$ im obigen Beispiel) in Ihre Zeichenkette einzufügen.
- `$1`, `$2`, `$3` usw., um direkt Werte einzufügen, die von einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf in Ihre Zeichenkette erhalten wurden.

Weitere Anmerkungen:

- Jede Anzahl von aufeinanderfolgenden Dollarzeichen, die in Zeichenketten erscheinen, wird durch die gleiche Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$, usw.
- Wenn die Gebietsschema-Datei gelesen wird, werden Tokens, die `/\$([a-z0-9_@]+)\$/i` entsprechen, durch den übereinstimmenden Wert aus dem "placeholders"-Objekt der Zeichenkette ersetzt. Diese Ersetzungen erfolgen vor der Verarbeitung von Tokens, die `/\$\d/` im Text entsprechen.
- Wenn eine Ortszeichenkette verwendet wird, werden Tokens, die `/\$\d+/` entsprechen, mit den Ersatzwerten ersetzt, die {{WebExtAPIRef("i18n.getMessage()")}} übergeben werden.
- `getMessage()` verarbeitet keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen.

### Beschreibung

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenkette enthalten, um einem Übersetzer zu helfen, die bestmögliche Übersetzung der Zeichenkette zu erstellen.

### Platzhalter

{{optional_inline}}

Das `"placeholders"`-Mitglied definiert einen oder mehrere Platzhalte-Zeichenfolgen, die innerhalb der Nachricht verwendet werden sollen — diese können verwendet werden, um Elemente festzulegen, die Sie nicht übersetzen möchten, oder um auf Variablen zu verweisen.

Jede Platzhalter-Zeichenfolgendefinition hat eine Reihe eigener Werte:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### Platzhaltername

Der Platzhaltername wird verwendet, um den Platzhalter in der Ersatzzeichenfolge darzustellen (z.B. wird `"url"` zu `$url$`). Er ist nicht case-sensitiv und kann dieselben Zeichen enthalten wie ein Nachrichtenzeichenfolgenname [Name](#name).

#### Inhalt

Der "content"-Eintrag definiert den Inhalt des Platzhalters. Dies kann eine fest codierte Zeichenkette sein, wie "Mein Platzhalter", es kann aber auch Werte einbeziehen, die von einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf erhalten werden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtenzeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### Beispiel

{{optional_inline}}

Das optionale "example"-Element soll Übersetzern erneut helfen, indem es ihnen ein Beispiel zeigt, wie der Platzhalter für Endbenutzer erscheinen würde, und ihnen ermöglicht, die beste Wahl bei der Lokalisierung der Datei zu treffen.
