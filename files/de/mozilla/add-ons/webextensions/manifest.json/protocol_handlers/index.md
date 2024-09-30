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

Ein Protokoll-Handler ist eine Anwendung, die weiß, wie bestimmte Arten von Links gehandhabt werden: Zum Beispiel ist ein Mail-Client ein Protokoll-Handler für "mailto:" Links. Wenn der Benutzer auf einen "mailto:" Link klickt, öffnet der Browser die als Handler für das "mailto:" Protokoll ausgewählte Anwendung (oder bietet ihm eine Auswahl an Handlern an, abhängig von seinen Einstellungen).

> [!NOTE]
> Standardmäßig laufen Erweiterungen nicht in privaten Browsersitzungen. Da Protokoll-Handler Teil der Erweiterung sind, funktionieren sie standardmäßig nicht in privaten Fenstern. Ob eine Erweiterung auf private Browsersitzungen zugreifen kann und ihre Protokoll-Handler aktiv werden, liegt in der Kontrolle des Benutzers. Für Details siehe [Erweiterungen im Privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie auf private Browsersitzungen zugreifen kann, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet.

Mit diesem Schlüssel können Sie eine Website als Handler für ein bestimmtes Protokoll registrieren. Die Syntax und Semantik dieses Schlüssels ist sehr ähnlich der Funktion [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler), mit dem Unterschied, dass bei `registerProtocolHandler()` eine Website sich nur selbst als Handler registrieren kann.

Jeder Protokoll-Handler hat drei Eigenschaften, die alle verpflichtend sind:

- `protocol`

  - : Ein String, der das Protokoll definiert. Dies muss entweder sein:

    - einer der folgenden: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - ein String, der aus einem benutzerdefinierten Namen besteht, der mit "web+" oder "ext+" beginnt. Zum Beispiel: "web+foo" oder "ext+foo". Der benutzerdefinierte Name darf nur aus Kleinbuchstaben im [ASCII](/de/docs/Glossary/ASCII) bestehen. Es wird empfohlen, dass Erweiterungen die Form "ext+" verwenden.

- `name`
  - : Ein String, der den Namen des Protokoll-Handlers darstellt. Dieser wird dem Benutzer angezeigt, wenn er gefragt wird, ob er möchte, dass dieser Handler den Link öffnet.
- `uriTemplate`
  - : Ein String, der die URL des Handlers darstellt. Dieser String muss "%s" als Platzhalter enthalten: Dieser wird durch die kodierte URL des Dokuments ersetzt, das behandelt werden soll. Diese URL kann eine tatsächliche URL, eine Telefonnummer, eine E-Mail-Adresse oder ähnliches sein. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

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
