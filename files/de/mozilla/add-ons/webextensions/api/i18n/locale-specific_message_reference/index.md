---
title: Sprachspezifische Nachrichtenreferenz
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Jede internationalisierte Erweiterung hat mindestens eine Datei namens `messages.json`, die sprachspezifische Zeichenfolgen bereitstellt. Diese Seite beschreibt das Format von `messages.json`-Dateien.

> [!NOTE]
> Informationen zur Internationalisierung Ihrer Erweiterungen finden Sie in unserem [i18n-Leitfaden](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization).

## Beispiel für messages.json

Der folgende Code zeigt ein Beispiel für eine `messages.json`-Datei, übernommen von unserer [notify-link-clicks-i18n-Beispiel](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n) Erweiterung. Nur die Felder "_name_" und "message" sind erforderlich.

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

Ihre `messages.json`-Dateien müssen in Verzeichnissen platziert werden, die nach der unterstützten Sprachumgebung benannt sind — `en`, `de`, `ja` usw. Diese müssen wiederum in ein Verzeichnis namens `_locales` innerhalb des Stammverzeichnisses Ihrer Erweiterung platziert werden.

## Details zu den Mitgliedern

Dieser Abschnitt beschreibt jedes Mitglied, das in einer `messages.json`-Datei erscheinen kann.

### name

Jedes oberste Mitglied ist nach dem Namen der Nachrichtzeichenfolge benannt, die Sie lokalisieren, zum Beispiel `"extensionName"` oder `"notificationContent"` im obigen Beispiel. Jeder Name ist nicht auf Groß- oder Kleinschreibung angewiesen und fungiert als Schlüssel, um den lokalisierten Nachrichtentext abzurufen.

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

- _$placeholder_name$_ (unabhängig von Groß- und Kleinschreibung), um einen bestimmten Platzhalter (zum Beispiel $URL$ im obigen Beispiel) in Ihre Zeichenfolge einzufügen.
- `$1`, `$2`, `$3` usw., um Werte, die von einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf erhalten werden, direkt in Ihre Zeichenfolge einzufügen.

Weitere Punkte zu beachten:

- Jede Anzahl aufeinanderfolgender Dollarzeichen, die in Zeichenfolgen erscheinen, wird durch die gleiche Anzahl von Dollarzeichen minus eins ersetzt. Also, $$ > $, $$$ > $$, usw.
- Wenn die Sprachdatei gelesen wird, werden Token, die `/\$([a-z0-9_@]+)\$/i` entsprechen, durch den passenden Wert aus dem "placeholders"-Objekt der Zeichenfolge ersetzt. Diese Ersetzungen erfolgen vor der Verarbeitung von `/\$\d/` Token in der Nachricht.
- Wenn eine lokale Zeichenfolge verwendet wird, werden Token, die `/\$\d+/` entsprechen, durch die Ersetzungen ersetzt, die an {{WebExtAPIRef("i18n.getMessage()")}} übergeben werden.
- `getMessage()` verarbeitet keine Aufrufe mit mehr als 9 Platzhaltern/Ersetzungen.

### description

{{optional_inline}}

Das `"description"`-Mitglied sollte eine Beschreibung des Inhalts der Nachrichtenzeichenfolge enthalten, die dazu dient, einem Übersetzer zu helfen, die bestmögliche Übersetzung der Zeichenfolge zu erstellen.

### placeholders

{{optional_inline}}

Das `"placeholders"`-Mitglied definiert einen oder mehrere Platzhalter-Teilzeichenfolgen, die innerhalb der Nachricht verwendet werden sollen — diese können verwendet werden, um Elemente fest zu codieren, die Sie nicht übersetzen möchten, oder um auf Variablen zu verweisen.

Jedes Platzhalter-Teilzeichenfolgen-Definition hat eine Reihe eigener Werte:

```json
"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}
```

#### Platzhaltername

Der Platzhaltername wird verwendet, um den Platzhalter in der Ersetzungszeichenfolge darzustellen (z.B. wird `"url"` zu `$url$`). Er ist unabhängig von Groß- und Kleinschreibung und kann die gleichen Zeichen wie ein Nachrichtenzeichenfolgen-[name](#name) enthalten.

#### content

Das "content"-Element definiert den Inhalt des Platzhalters. Dies kann eine fest codierte Zeichenfolge wie "Mein Platzhalter" sein, kann aber auch Werte enthalten, die von einem {{WebExtAPIRef("i18n.getMessage()")}}-Aufruf erhalten wurden. Diese Eigenschaft ist erforderlich. Weitere Informationen finden Sie unter [Abrufen von Nachrichtszeichenfolgen aus JavaScript](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#retrieving_message_strings_from_javascript).

#### example

{{optional_inline}}

Das optionale "example"-Element soll wieder Übersetzer unterstützen, indem es ihnen zeigt, wie der Platzhalter für Endbenutzer erscheinen würde, sodass sie die beste Wahl beim Lokalisieren der Datei treffen können.
