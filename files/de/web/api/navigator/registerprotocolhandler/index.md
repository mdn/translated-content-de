---
title: "Navigator: registerProtocolHandler()-Methode"
short-title: registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **{{domxref("Navigator")}}**-Methode **`registerProtocolHandler()`** ermöglicht es Websites, ihre Fähigkeit zu registrieren, bestimmte URL-Schemata (auch bekannt als Protokolle) zu öffnen oder zu verwalten.

Zum Beispiel können Webmail-Seiten mittels dieser API `mailto:`-URLs öffnen oder VoIP-Seiten `tel:`-URLs.

Um einen Protokoll-Handler zu registrieren, ruft eine Website `registerProtocolHandler()` auf und übergibt das zu registrierende Protokoll sowie eine Vorlage-URL.

Wenn der Benutzer einen Link aktiviert, der das registrierte Protokoll verwendet, fügt der Browser das [`href`](/de/docs/Web/HTML/Element/a#href) des aktivierten Links in die während der Registrierung des Handlers angegebene URL-Vorlage ein und navigiert die aktuelle Seite zu der resultierenden URL.

Der Browser kann den Benutzer fragen, ob er möchte, dass die Seite das Protokoll handhaben darf, entweder bei der Registrierung des Protokolls oder wenn der Benutzer den Link aktiviert.

## Syntax

```js-nolint
registerProtocolHandler(scheme, url)
```

### Parameter

- `scheme`

  - : Ein String, der das Schema für das Protokoll enthält, das die Seite handhaben möchte.

    Dies kann ein benutzerdefiniertes Schema sein, in diesem Fall beginnt der Name des Schemas:

    - Mit `web+`
    - Enthält mindestens einen Buchstaben nach dem `web+`-Präfix
    - Enthält nur Kleinbuchstaben des {{Glossary("ASCII")}}-Zeichensatzes.

    Andernfalls muss das Schema eines der folgenden sein:

    - `bitcoin`
    - `ftp`
    - `ftps`
    - `geo`
    - `im`
    - `irc`
    - `ircs`
    - `magnet`
    - `mailto`
    - `matrix`
    - `mms`
    - `news`
    - `nntp`
    - `openpgp4fpr`
    - `sftp`
    - `sip`
    - `sms`
    - `smsto`
    - `ssh`
    - `tel`
    - `urn`
    - `webcal`
    - `wtai`
    - `xmpp`

    <!-- Dies muss übereinstimmen mit: https://html.spec.whatwg.org/multipage/system-state.html#safelisted-scheme -->

- `url`

  - : Ein String, der die URL des Handlers enthält.
    Diese URL muss `%s` einschließen, als Platzhalter, der mit der [escaped](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) zu verwaltenden URL ersetzt wird.

    Die Handler-URL muss das `https`-Schema verwenden und muss vom gleichen {{glossary("origin")}} wie die Webseite sein, die versucht, den Handler zu registrieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}

  - : Der Benutzeragent blockierte die Registrierung.
    Dies kann passieren, wenn:

    - Das registrierte Schema (Protokoll) ungültig ist, wie ein Schema, das der Browser selbst verwaltet (`https:`, `about:`, etc.)
    - Der {{Glossary("origin")}} der Handler-URL nicht mit dem Ursprung der Seite, die diese API aufruft, übereinstimmt.
    - Das Schema der Handler-URL nicht `https` ist.

- `SyntaxError` {{domxref("DOMException")}}
  - : Der `%s` Platzhalter fehlt in der Handler-URL.

## Beispiele

### Registrierung eines Handlers für das mailto-Protokoll

Es ist relativ häufig, dass Webseiten auf Ressourcen mit nicht-`https`-Protokollen verlinken. Ein Beispiel ist das `mailto:`-Protokoll. Webautoren können einen `mailto`-Link verwenden, wenn sie den Benutzern eine bequeme Möglichkeit bieten möchten, eine E-Mail direkt von der Webseite aus zu senden:

```html
<a href="mailto:webmaster@example.com">Web Master</a>
```

Wenn der Link aktiviert wird, sollte der Browser die Standardanwendung für die E-Mail-Verwaltung starten. Sie können dies als einen _desktop-basierten_ Protokoll-Handler betrachten.

Webbasierte Protokoll-Handler ermöglichen es auch webbasierten Anwendungen am Prozess teilzunehmen. Eine E-Mail-Webanwendung unter `mail.example.org` kann sich registrieren, um `mailto`-Links mit folgendem Code zu handhaben:

```js
navigator.registerProtocolHandler("mailto", "https://mail.example.org/?to=%s");
```

Danach wird der Browser (nach einer möglichen Bestätigung durch den Benutzer) zu `https://mail.example.org/?to=mailto:webmaster@example.com` navigieren, wenn der Benutzer auf einen `mailto`-Link auf einer beliebigen Website klickt. Diese Seite könnte den URL-Parameter analysieren, um die Adresse zu extrahieren und diese zur Initialisierung einer E-Mail verwenden.

### Registrierung eines Handlers für ein benutzerdefiniertes Protokoll

In diesem Beispiel registriert eine Seite einen Handler für das `web+burger`-Protokoll mit folgendem Code:

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.org/?burger=%s",
);
```

Anschließend besucht der Benutzer eine Seite mit einem Link wie diesem:

```html
<a href="web+burger:cheeseburger">cheeseburger</a>
```

Wenn der Benutzer den `web+burger`-Link aktiviert, wird der Browser (nach einer möglichen Bestätigung durch den Benutzer) zu `https://burgers.example.org/?burger=web+burger:cheeseburger` navigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
