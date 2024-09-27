---
title: protocol_handlers
slug: Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
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

Verwenden Sie diesen Schlüssel, um einen oder mehrere webbasierte Protokoll-Handler zu registrieren.

Ein Protokoll-Handler ist eine Anwendung, die weiß, wie bestimmte Arten von Links behandelt werden: Zum Beispiel ist ein E-Mail-Client ein Protokoll-Handler für "mailto:"-Links. Wenn der Benutzer auf einen "mailto:"-Link klickt, öffnet der Browser die als Handler für das "mailto:"-Protokoll ausgewählte Anwendung (oder bietet ihm je nach Einstellungen eine Auswahl von Handlers an).

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in Fenstern des privaten Modus. Da Protokoll-Handler Teil der Erweiterung sind, funktionieren sie im privaten Modus standardmäßig nicht. Ob eine Erweiterung auf Fenster des privaten Modus zugreifen kann und ihre Protokoll-Handler aktiv werden, liegt unter der Kontrolle des Benutzers. Für Details siehe [Erweiterungen im privaten Modus](https://support.mozilla.org/de/kb/erweiterungen-privater-modus). Ihre Erweiterung kann überprüfen, ob sie auf Fenster des privaten Modus zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Mit diesem Schlüssel können Sie eine Website als Handler für ein bestimmtes Protokoll registrieren. Die Syntax und Semantik dieses Schlüssels ist ähnlich der Funktion [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler), außer dass mit `registerProtocolHandler()` eine Website sich nur selbst als Handler registrieren kann.

Jeder Protokoll-Handler hat drei Eigenschaften, die alle verpflichtend sind:

- `protocol`

  - : Ein String, der das Protokoll definiert. Dies muss entweder sein:

    - einer der folgenden: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - ein String, der aus einem benutzerdefinierten Namen besteht, der mit "web+" oder "ext+" beginnt. Zum Beispiel: "web+foo" oder "ext+foo". Der benutzerdefinierte Name darf nur aus Kleinbuchstaben [ASCII](/de/docs/Glossary/ASCII)-Zeichen bestehen. Es wird empfohlen, dass Erweiterungen die Form "ext+" verwenden.

- `name`
  - : Ein String, der den Namen des Protokoll-Handlers darstellt. Dieser wird dem Benutzer angezeigt, wenn er gefragt wird, ob dieser Handler den Link öffnen soll.
- `uriTemplate`
  - : Ein String, der die URL des Handlers darstellt. Dieser String muss "%s" als Platzhalter enthalten: dies wird durch die escpated URL des zu behandelnden Dokuments ersetzt. Diese URL könnte eine echte URL sein, oder sie könnte eine Telefonnummer, E-Mail-Adresse oder ähnliches sein. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

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

Wenn das Protokoll nicht in der zugelassenen Liste ist, muss es mit 'ext+' beginnen

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
