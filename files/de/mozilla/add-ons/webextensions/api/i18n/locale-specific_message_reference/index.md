---
title: „Lokal spezifische Nachrichtenreferenz“
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{AddonSidebar}}

Jede internationalisierte Erweiterung hat mindestens eine Datei mit dem Namen `messages.json`, die lokale spezifische Zeichenfolgen bereitstellt. Diese Seite beschreibt das Format der `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) Leitfaden.

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel für eine `messages.json`-Datei, entnommen aus unserer [notify-link-clicks-i18n Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung. Nur die Felder „_name_“ und „message“ sind erforderlich.

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

Ihre `messages.json`-Dateien müssen in Verzeichnissen platziert werden, die nach der jeweiligen unterstützenden Lokale benannt sind — `en`, `de`, `ja` usw. Diese müssen wiederum in einem Verzeichnis namens `_locales` platziert werden, das sich im Stammverzeichnis Ihrer Erweiterung befindet.

## Details der Mitglieder

Dieser Abschnitt beschreibt jedes Mitglied, das in einer `messages.json`-Datei auftreten kann.

### name

Jedes Top-Level-Mitglied wird nach dem Namen der zu lokalisierenden Nachrichtenzeichenfolge benannt, zum Beispiel `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jeder Name ist nicht ohne Bezug auf Groß- oder Kleinschreibung, und er fungiert als Schlüssel, mit dem Sie den lokalisierten Nachrichtentext abrufen können.

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

- _$placeholder_name$_ (unabhängig von der Groß- oder Kleinschreibung), um einen bestimmten Platzhalter (zum Beispiel $URL$ im obigen Beispiel) in Ihrer Zeichenfolge einzufügen.
- `$1`, `$2`, `$3` usw., um Werte direkt in Ihre Zeichenfolge einzufügen, die von einem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf erhalten werden.

Weitere Punkte zu beachten:

- Beliebig viele aufeinanderfolgende Dollarzeichen in Zeichenfolgen werden durch dieselbe Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$ usw.
- Wenn die Locale-Datei gelesen wird, werden mit `/\$([a-z0-9_@]+)\$/i` übereinstimmende Tokens durch den entsprechenden Wert aus dem „placeholders“-Objekt der Zeichenfolge ersetzt. Diese Ersetzungen erfolgen vor der Verarbeitung von `/\$\d/` Tokens in der Nachricht.
- Wenn eine Locale-Zeichenfolge verwendet wird, werden mit `/\$\d+/` übereinstimmende Tokens durch die an {{WebExtAPIRef("i18n.getMessage()")}} übergebenen Ersetzungen ersetzt.
- `getMessage()` verarbeitet keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen.

### description

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenfolge enthalten, die einem Übersetzer helfen soll, die bestmögliche Übersetzung der Zeichenfolge zu erstellen.

### placeholders

{{optional_inline}}

Das `"placeholders"`-Mitglied definiert ein oder mehrere Platzhalter-Teilzeichenfolgen zur Verwendung in der Nachricht — diese können verwendet werden, um Dinge zu kodifizieren, die nicht übersetzt werden sollen, oder um auf Variablen zu verweisen.

Jede Platzhalter-Teilzeichenfolgendefinition hat eigene Wertangaben:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### placeholder name

Der Platzhaltername wird verwendet, um den Platzhalter in der Ersatzzeichenfolge zu repräsentieren (z.B. wird `"url"` zu `$url$`). Er ist nicht ohne Bezug auf Groß- oder Kleinschreibung und kann dieselben Zeichen wie ein Nachrichtenzeichenfolgenname [name](#name) enthalten.

#### content

Der „content“-Eintrag definiert den Inhalt des Platzhalters. Dies kann eine fest kodierte Zeichenfolge sein, wie „My placeholder“, aber es kann auch Werte enthalten, die von einem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf erhalten werden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtenzeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

Der optionale „example“-Eintrag ist wieder dazu gedacht, Übersetzern zu helfen, indem er ihnen ein Beispiel zeigt, wie der Platzhalter für Endbenutzer erscheinen würde, sodass sie die beste Wahl treffen können, wenn sie die Datei lokalisieren.
