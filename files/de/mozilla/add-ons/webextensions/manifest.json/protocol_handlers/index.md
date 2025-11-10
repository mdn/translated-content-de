---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"protocol_handlers": [
  {
    "protocol": "ircs",
    "name": "IRC Mozilla Extension",
    "uriTemplate": "https://irccloud.mozilla.com/#!/%s"
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie diesen Schlüssel, um einen oder mehrere webbasierte Protokollhandler zu registrieren.

Ein Protokollhandler ist eine Anwendung, die weiß, wie bestimmte Arten von Links zu handhaben sind: Zum Beispiel ist ein Mail-Client ein Protokollhandler für "mailto:" Links. Wenn der Benutzer auf einen "mailto:" Link klickt, öffnet der Browser die als Handler für das "mailto:" Protokoll ausgewählte Anwendung (oder bietet ihm eine Wahl von Handlers, abhängig von seinen Einstellungen).

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in privaten Browsing-Fenstern. Da Protokollhandler Teil der Erweiterung sind, funktionieren sie standardmäßig nicht in privaten Browsing-Fenstern. Ob eine Erweiterung auf private Browsing-Fenster zugreifen kann und ihre Protokollhandler aktiv werden, liegt im Ermessen des Nutzers. Weitere Informationen finden Sie unter [Erweiterungen im Modus Privates Surfen](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann prüfen, ob sie auf private Browsing-Fenster zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Mit diesem Schlüssel können Sie eine Website als Handler für ein bestimmtes Protokoll registrieren. Die Syntax und Semantik dieses Schlüssels ist sehr ähnlich der Funktion [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler), außer dass mit `registerProtocolHandler()` eine Website nur sich selbst als Handler registrieren kann.

Jeder Protokollhandler hat drei Eigenschaften, alle erforderlich:

- `protocol`
  - : Ein String, der das Protokoll definiert. Dies muss entweder sein:
    - eines der folgenden: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - ein String, der aus einem benutzerdefinierten Namen besteht, der mit "web+" oder "ext+" beginnt. Zum Beispiel: "web+foo" oder "ext+foo". Der benutzerdefinierte Name darf nur aus Kleinbuchstaben {{Glossary("ASCII", "ASCII")}} Zeichen bestehen. Es wird empfohlen, dass Erweiterungen das "ext+" Format verwenden.

- `name`
  - : Ein String, der den Namen des Protokollhandlers darstellt. Dieser wird dem Benutzer angezeigt, wenn er gefragt wird, ob er diesen Handler zum Öffnen des Links verwenden möchte.
- `uriTemplate`
  - : Ein String, der die URL des Handlers darstellt. Dieser String muss "%s" als Platzhalter enthalten: dies wird durch die bearbeitete URL des zu behandelnden Dokuments ersetzt. Diese URL könnte eine echte URL sein oder eine Telefonnummer, E-Mail-Adresse usw. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

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

Wenn das Protokoll nicht in der erlaubten Liste enthalten ist, muss es mit 'ext+' beginnen.

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
