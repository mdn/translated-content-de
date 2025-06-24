---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"protocol_handlers": [
  {
    "protocol": "ircs",
    "name": "IRC Mozilla Erweiterung",
    "uriTemplate": "https://irccloud.mozilla.com/#!/%s"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie diesen Schlüssel, um einen oder mehrere webbasierte Protokollhandler zu registrieren.

Ein Protokollhandler ist eine Anwendung, die weiß, wie bestimmte Typen von Links zu behandeln sind: Zum Beispiel ist ein E-Mail-Client ein Protokollhandler für "mailto:"-Links. Wenn der Benutzer auf einen "mailto:"-Link klickt, öffnet der Browser die Anwendung, die als Handler für das "mailto:"-Protokoll ausgewählt wurde (oder bietet dem Benutzer eine Auswahl von Handlern an, abhängig von den Einstellungen).

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in privaten Browser-Fenstern. Da Protokollhandler Teil der Erweiterung sind, funktionieren sie standardmäßig nicht in privaten Browser-Fenstern. Ob eine Erweiterung auf private Browser-Fenster zugreifen kann und ihre Protokollhandler aktiv werden, liegt in der Kontrolle des Benutzers. Für Details siehe [Extensions in Private Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie auf private Browser-Fenster zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Mit diesem Schlüssel können Sie eine Website als Handler für ein bestimmtes Protokoll registrieren. Die Syntax und Semantik dieses Schlüssels ähnelt sehr der Funktion [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler), außer dass mit `registerProtocolHandler()` eine Website sich nur selbst als Handler registrieren kann.

Jeder Protokollhandler hat drei Eigenschaften, alle verpflichtend:

- `protocol`

  - : Ein String, der das Protokoll definiert. Dieser muss entweder:
    - einer der folgenden sein: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - ein String, der aus einem benutzerdefinierten Namen besteht, der mit "web+" oder "ext+" beginnt. Zum Beispiel: "web+foo" oder "ext+foo". Der benutzerdefinierte Name darf nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen in Kleinbuchstaben bestehen. Es wird empfohlen, dass Erweiterungen die Form "ext+" verwenden.

- `name`
  - : Ein String, der den Namen des Protokollhandlers darstellt. Dieser wird dem Benutzer angezeigt, wenn gefragt wird, ob dieser Handler den Link öffnen soll.
- `uriTemplate`
  - : Ein String, der die URL des Handlers darstellt. Dieser String muss "%s" als Platzhalter enthalten: Dies wird durch die escapte URL des zu behandelnden Dokuments ersetzt. Diese URL könnte eine echte URL sein oder eine Telefonnummer, E-Mail-Adresse usw. Diese ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Beispiel

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

Wenn das Protokoll nicht in der erlaubten Liste ist, muss es mit 'ext+' beginnen.

```json
"protocol_handlers": [
  {
    "protocol": "ext+foo",
    "name": "Foo Extension",
    "uriTemplate": "https://example.com/#!/%s"
  }
]
```

Handler können auch [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) sein.

```json
"protocol_handlers": [
  {
    "protocol": "magnet",
    "name": "Magnet Extension",
    "uriTemplate": "/example.xhtml#!/%s"
  }
]
```

## Browser-Kompatibilität

{{Compat}}
