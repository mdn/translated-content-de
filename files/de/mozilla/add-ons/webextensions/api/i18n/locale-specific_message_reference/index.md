---
title: Referenz für lokalisierungsspezifische Nachrichten
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Jede internationalisierte Erweiterung verfügt über mindestens eine Datei namens `messages.json`, die lokalisierungsspezifische Zeichenfolgen bereitstellt. Diese Seite beschreibt das Format von `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) Leitfaden.

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel für eine `messages.json`-Datei, entnommen aus unserer [notify-link-clicks-i18n Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung. Nur die Felder "_name_" und "message" sind erforderlich.

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

Ihre `messages.json`-Dateien müssen in Verzeichnissen platziert werden, die nach der Lokalisierung benannt sind, die jede Datei unterstützt — `en`, `de`, `ja` usw. Diese müssen wiederum in einem Verzeichnis namens `_locales` abgelegt werden, das sich im Stammverzeichnis Ihrer Erweiterung befindet.

## Mitgliedsdetails

Dieser Abschnitt beschreibt jedes Mitglied, das in einer `messages.json`-Datei erscheinen kann.

### name

Jedes oberste Mitglied ist benannt nach dem Namen der Nachrichtenzeichenfolge, die Sie lokalisieren, zum Beispiel `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jeder Name ist nicht case-sensitiv und fungiert als Schlüssel, mit dem Sie den lokalisierten Nachrichtentext abrufen können.

Der Name kann folgende Zeichen enthalten:

- A-Z
- a-z
- 0-9
- \_ (Unterstrich)
- @

> [!NOTE]
> Sie sollten keine Namen definieren, die mit @@ beginnen. Solche Namen sind für [vordefinierte Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#predefined_messages) reserviert.

### message

Diese Eigenschaft muss für jede Zeichenfolge festgelegt werden. Das `"message"`-Mitglied enthält eine lokalisierte Zeichenfolge, die [Platzhalter](#placeholders) enthalten kann. Sie können verwenden:

- _$placeholder_name$_ (nicht case-sensitiv), um einen bestimmten Platzhalter (z.B. $URL$ im obigen Beispiel) in Ihre Zeichenfolge einzufügen.
- `$1`, `$2`, `$3` usw., um direkt Werte einzufügen, die aus einem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf in Ihre Zeichenfolge erhalten wurden.

Weitere zu beachtende Punkte:

- Eine beliebige Anzahl aufeinanderfolgender Dollarzeichen, die in Zeichenfolgen erscheinen, werden durch die gleiche Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$ usw.
- Wenn die Lokalisierungsdatei gelesen wird, werden Token, die `/\$([a-z0-9_@]+)\$/i` entsprechen, durch den passenden Wert aus dem "placeholders"-Objekt der Zeichenfolge ersetzt. Diese Ersetzungen erfolgen vor der Verarbeitung von `/\$\d/` Token in der Nachricht.
- Wenn eine Lokalisierungszeichenfolge verwendet wird, werden Token, die `/\$\d+/` entsprechen, durch die Ersetzungen ersetzt, die an {{WebExtAPIRef("i18n.getMessage()")}} übergeben werden.
- `getMessage()` wird keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen verarbeiten.

### description

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenfolge enthalten, um dem Übersetzer zu helfen, die bestmögliche Übersetzung der Zeichenfolge zu erstellen.

### placeholders

{{optional_inline}}

Das `"placeholders"`-Mitglied definiert ein oder mehrere Platzhalter-Teilzeichenfolgen zur Verwendung innerhalb der Nachricht — diese können verwendet werden, um Elemente festzucodieren, die nicht übersetzt werden sollen, oder um auf Variablen zu verweisen.

Jede Platzhalter-Teilzeichenfolgendefinition hat eine Reihe eigener Werte:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### placeholder name

Der Platzhaltername wird verwendet, um den Platzhalter in der Ersetzungszeichenfolge darzustellen (z.B. wird `"url"` zu `$url$`). Er ist nicht case-sensitiv und kann die gleichen Zeichen wie ein [name](#name) der Nachrichtenzeichenfolge enthalten.

#### content

Das "content"-Element definiert den Inhalt des Platzhalters. Dies kann eine festcodierte Zeichenfolge wie "Mein Platzhalter" sein, es kann aber auch Werte enthalten, die aus einem {{WebExtAPIRef("i18n.getMessage()")}} Aufruf erhalten wurden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtenzeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

Das optionale "example"-Element soll Übersetzern helfen, indem es ihnen ein Beispiel zeigt, wie der Platzhalter den Endbenutzern erscheinen würde, sodass sie die beste Wahl bei der Lokalisierung der Datei treffen können.
