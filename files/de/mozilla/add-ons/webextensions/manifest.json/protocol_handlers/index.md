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
      <th scope="row">Erforderlich</th>
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

Verwenden Sie diesen Schlüssel, um einen oder mehrere webbasierte Protokollhandler zu registrieren.

Ein Protokollhandler ist eine Anwendung, die weiß, wie bestimmte Arten von Links verarbeitet werden: Beispielsweise ist ein E-Mail-Client ein Protokollhandler für "mailto:"-Links. Wenn der Benutzer auf einen "mailto:"-Link klickt, öffnet der Browser die als Handler für das "mailto:"-Protokoll ausgewählte Anwendung (oder bietet je nach Einstellungen eine Auswahl an Handlers an).

> [!NOTE]
> Standardmäßig werden Erweiterungen in privaten Fenstern nicht ausgeführt. Da Protokollhandler Teil der Erweiterung sind, funktionieren sie in privaten Fenstern standardmäßig nicht. Ob eine Erweiterung Zugriff auf private Fenster hat und ihre Protokollhandler aktiv werden, liegt in der Kontrolle des Benutzers. Für Details siehe [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie Zugriff auf private Fenster hat, mit {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}}.

Mit diesem Schlüssel können Sie eine Website als Handler für ein bestimmtes Protokoll registrieren. Die Syntax und Semantik dieses Schlüssels sind ähnlich der Funktion [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler), außer dass sich eine Website mit `registerProtocolHandler()` nur selbst als Handler registrieren kann.

Jeder Protokollhandler hat drei Eigenschaften, alle erforderlich:

- `protocol`

  - : Ein String, der das Protokoll definiert. Dies muss entweder sein:

    - eines der folgenden: "bitcoin", "dat", "dweb", "ftp", "geo", "gopher", "im", "ipfs", "ipns", "irc", "ircs", "magnet", "mailto", "matrix", "mms", "news", "nntp", "sip", "sms", "smsto", "ssb", "ssh", "tel", "urn", "webcal", "wtai", "xmpp".
    - ein String, der aus einem benutzerdefinierten Namen besteht, der mit "web+" oder "ext+" beginnt. Zum Beispiel: "web+foo" oder "ext+foo". Der benutzerdefinierte Name darf nur aus klein geschriebenen {{Glossary("ASCII")}}-Zeichen bestehen. Es wird empfohlen, dass Erweiterungen die "ext+"-Form verwenden.

- `name`
  - : Ein String, der den Namen des Protokollhandlers darstellt. Dieser wird dem Benutzer angezeigt, wenn er gefragt wird, ob er möchte, dass dieser Handler den Link öffnet.
- `uriTemplate`
  - : Ein String, der die URL des Handlers darstellt. Dieser String muss "%s" als Platzhalter enthalten: Dieser wird durch die eskapierte URL des zu verarbeitenden Dokuments ersetzt. Diese URL kann eine echte URL sein oder es könnte sich um eine Telefonnummer, E-Mail-Adresse usw. handeln. Dies ist eine [lokalisierbare Eigenschaft](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

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

Wenn das Protokoll nicht in der erlaubten Liste enthalten ist, muss es mit 'ext+' beginnen

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
