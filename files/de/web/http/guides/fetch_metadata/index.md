---
title: Fetch-Metadaten
slug: Web/HTTP/Guides/Fetch_metadata
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

**Fetch-Metadaten** bezeichnet eine Gruppe von HTTP-Anfrage-Headern, die dem Server Informationen über den Kontext liefern, in dem eine Anfrage gestellt wird.

Unter anderem kann der Server anhand von Fetch-Metadaten erkennen:

- Ob die Anfrage eine Navigation zwischen Dokumenten oder eine Anfrage nach einer Unterressource darstellt oder ausdrücklich aus JavaScript heraus gestellt wurde, beispielsweise über die [`fetch()`](/de/docs/Web/API/Window/fetch)-API.

- In welcher Beziehung der Anfragende zur angeforderten Ressource steht: ob beide denselben {{Glossary("origin", "Origin")}} oder dieselbe {{Glossary("site", "Site")}} haben oder zu völlig unterschiedlichen Sites gehören.

Mithilfe der Informationen in diesen Headern kann ein Server bestimmte Anfragen zulassen oder ablehnen und so einen Schutz gegen [_Cross-Origin-Angriffe_](#cross-origin_angriffe) wie [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) und verschiedene [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) einrichten.

## Fetch-Metadaten-Header

Die [Fetch-Metadaten-Spezifikation](https://w3c.github.io/webappsec-fetch-metadata/) definiert vier Fetch-Metadaten-Header:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Wie alle Header mit dem Präfix `Sec-` gehören sie zu den {{Glossary("forbidden_request_header", "verbotenen Anfrage-Headern")}}. Das bedeutet, dass sie nicht durch den Frontend-Code einer Website gesetzt oder geändert werden können. Außerdem werden Fetch-Metadaten-Header nur bei Anfragen an [potenziell vertrauenswürdige URLs](/de/docs/Web/Security/Defenses/Secure_Contexts#potentially_trustworthy_urls) gesendet. Server auf nicht sicheren (`http://`) Origins erhalten diese Header daher nicht.

### Sec-Fetch-Dest

Dieser Header gibt das _Ziel_ der Anfrage an. Diese Eigenschaft ist in der Fetch API definiert und wird dort über die Eigenschaft [`Request.destination`](/de/docs/Web/API/Request/destination) bereitgestellt.

Vereinfacht ausgedrückt beschreibt sie, wie die zurückgegebene Ressource verwendet werden soll.

Bei den meisten {{Glossary("replaced_elements", "ersetzten Elementen")}} benennt der Wert des Headers das Element, für das die Ressource verwendet wird, etwa `iframe`, `object`, `audio` oder `video`. Der Wert `image` bedeutet, dass die Ressource als Bild verwendet wird, auf das beispielsweise ein HTML-Element {{htmlelement("img")}}, die CSS-Eigenschaft {{cssxref("background-image")}}, ein SVG-Element {{svgelement("image")}} oder eine andere Stelle der Webplattform verweist, die als Unterressourcen geladene Bilder verwendet.

Weitere wichtige Zielwerte sind:

- `document`
  - : Die Anfrage gilt einem neuen Dokument, das Ziel einer Navigation auf oberster Ebene ist (beispielsweise wenn der Benutzer auf einen Link auf der Seite klickt oder ein Formular absendet).

- `script`
  - : Die Ressource wird als Skript verwendet, das über ein HTML-Element {{htmlelement("script")}} oder durch einen Aufruf von [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) in einem Web Worker geladen wird.

    Genauere Werte kennzeichnen andere Verwendungsorte für Skripte, etwa Worklets (`audioworklet` und `paintworklet`) und Worker (`sharedworker`, `serviceworker` und `worker`).

- `empty`
  - : Für die Anfrage ist kein Ziel definiert. Dieser Wert wird unter anderem verwendet, wenn die Anfrage aus einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) hervorgeht.

Die vollständige Liste möglicher Werte finden Sie auf der {{HTTPHeader("Sec-Fetch-Site", "reference page", "", "nocode")}} dieses Headers.

### Sec-Fetch-Mode

Dieser Header gibt den _Modus_ der Anfrage an. Wie das Ziel ist auch der Modus in der [Fetch API](/de/docs/Web/API/Fetch_API) definiert und wird dort über die Eigenschaft [`Request.mode`](/de/docs/Web/API/Request/mode) bereitgestellt.

Die am häufigsten verwendeten Werte sind:

- `navigate`
  - : Die Anfrage stellt eine Navigation zwischen Dokumenten dar (beispielsweise wenn der Benutzer auf einen Link klickt).

- `no-cors`
  - : Die Anfrage wurde im Modus `no-cors` gestellt.

    Das bedeutet, dass sie auch dann über Origin-Grenzen hinweg zulässig ist, wenn der Server keine entsprechenden [CORS](/de/docs/Web/HTTP/Guides/CORS)-Header sendet. Allerdings kann JavaScript, das auf dem Client ausgeführt wird, nicht auf die Antwort zugreifen (sie ist _opak_).

    Dies ist der Standardmodus für Seiten, die Unterressourcen wie Bilder, Schriftarten, Skripte und Stylesheets laden. Er erklärt, warum eine andere Site die Unterressourcen Ihrer Site standardmäßig verwenden darf, selbst wenn Sie CORS dafür nicht eingerichtet haben.

- `cors`
  - : Wenn die Anfrage von einem anderen Origin stammt, muss der Server mit den entsprechenden [CORS](/de/docs/Web/HTTP/Guides/CORS)-Headern antworten, andernfalls schlägt die Anfrage fehl. Sendet der Server die passenden CORS-Header, stehen der Antworttext und bestimmte Header dem Aufrufenden zur Verfügung.

    Dieser Modus wird häufig für Cross-Origin-Anfragen verwendet, die mit der [Fetch API](/de/docs/Web/API/Fetch_API) aus JavaScript heraus gestellt werden, wenn der Anfragende auf die zurückgegebene Ressource zugreifen muss (beispielsweise bei einem Fetch-Aufruf, der JSON vom Server abruft).

- `same-origin`
  - : Die Anfrage ist nur zulässig, wenn der Anfragende und die angeforderte Ressource denselben Origin haben.

### Sec-Fetch-Site

Dieser Header gibt die Beziehung zwischen dem Origin der angeforderten Ressource und dem Origin des Anfragenden an.

Er zeigt an, ob der Anfragende:

- denselben {{Glossary("origin", "Origin")}} wie die angeforderte Ressource hat,
- einen anderen Origin, aber dieselbe {{Glossary("site", "Site")}} hat oder
- zu einer anderen Site gehört.

Wenn ein Benutzer beispielsweise auf einer Seite unter `https://books.example.org/authors` auf einen Link klickt, stellt der Browser eine Anfrage, um das im Linkziel angegebene Dokument abzurufen. Die folgende Tabelle zeigt die Werte des zugehörigen Headers `Sec-Fetch-Site` für verschiedene Linkziele:

| Linkziel                           | Wert von `Sec-Fetch-Site` |
| ---------------------------------- | ------------------------- |
| `https://books.example.org/titles` | `same-origin`             |
| `https://login.example.org/`       | `same-site`               |
| `https://books.example.com/titles` | `cross-site`              |

Entsprechendes gilt für andere HTTP-Anfragen, etwa:

- das Absenden von Formularen über das Attribut [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) eines {{htmlelement("form")}}-Elements,
- Anfragen nach Unterressourcen wie Bildern, Schriftarten oder Skripten,
- Anfragen über die [`fetch()`](/de/docs/Web/API/Window/fetch)-API.

Der Header `Sec-Fetch-Site` kann auch den Wert `none` haben, wenn die Anfrage nicht von einer Site ausgeht. Dazu gehören beispielsweise Anfragen, die entstehen, wenn ein Benutzer eine URL in die Adressleiste des Browsers eingibt oder auf ein Lesezeichen klickt. Die Spezifikation bezeichnet diese als [direkt vom Benutzer ausgelöste Anfragen](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated).

### Sec-Fetch-User

Dieser Header wird nur gesendet, wenn die Anfrage durch eine Benutzeraktion ausgelöst wurde (etwa durch einen Klick auf einen Link). Wenn er gesendet wird, hat er immer den Wert `?1`.

## Cross-Origin-Angriffe

Fetch-Metadaten sind besonders nützlich zur Abwehr von _Cross-Origin-Angriffen_. Solche Angriffe richten sich typischerweise gegen Benutzer, die ein Konto bei einer legitimen Site haben und dort angemeldet sind. Der Angreifer erstellt eine Website, die eine _Cross-Origin-Anfrage_ an die legitime Site stellt, und bringt den Benutzer dazu, diese Anfrage auszulösen.

> [!NOTE]
> In diesem Leitfaden verwenden wir den Begriff _Cross-Origin-Angriff_, obwohl viele dieser Angriffe üblicherweise als _Cross-Site-Angriffe_ bezeichnet werden.
>
> Ein {{Glossary("origin", "Origin")}} ist ein enger gefasster Begriff als eine {{Glossary("site", "Site")}}. Insbesondere umfasst eine Site die Subdomains einer Domain, ein Origin dagegen nicht: `https://example.org` und `https://login.example.org` gehören also zur selben Site, haben aber unterschiedliche Origins.
>
> Das bedeutet: Jeder Cross-Site-Angriff ist ein Cross-Origin-Angriff, aber nicht jeder Cross-Origin-Angriff ist ein Cross-Site-Angriff. Wenn ein Angreifer beispielsweise die Kontrolle über eine Subdomain einer Site erlangt, kann er die Site mit Anfragen angreifen, die _cross-origin_, aber _same-site_ sind. Um auch solche Angriffe einzuschließen, verwenden wir den enger gefassten Begriff.

Die Site des Angreifers könnte beispielsweise ein {{htmlelement("form")}}-Element enthalten, das Daten an die legitime Site sendet. Bei manchen Cross-Origin-Angriffen ist überhaupt keine Benutzerinteraktion erforderlich: Die Seite des Angreifers kann bereits beim Laden eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an die legitime Site ausführen. Der Benutzer muss dann nur die Seite des Angreifers öffnen, damit die Cross-Origin-Anfrage ausgeführt wird.

Da die Anfrage aus dem Browser des Benutzers stammt, enthält sie alle Cookies, die die legitime Site für diesen Benutzer gesetzt hat – auch solche, mit denen sie Benutzer identifiziert. Die Anfrage erhält daher die Berechtigungen dieses Benutzers.

Es lassen sich zwei Arten von Cross-Origin-Angriffen unterscheiden:

- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF): Bei diesen Angriffen löst die Cross-Origin-Anfrage auf dem legitimen Server eine folgenreiche Aktion aus. Dafür werden vom Angreifer vorgegebene Parameter verwendet. Beispielsweise fordert die Anfrage den Server auf, Geld vom Konto des betroffenen Benutzers auf das Konto des Angreifers zu überweisen.

- [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks): Bei diesen Angriffen nutzt der Angreifer die Anfrage, um Informationen über die Beziehung des Benutzers zur Ziel-Site zu erhalten, häufig über Seitenkanäle wie [Fehlerereignisse](/de/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events).

Die meisten Websites möchten einige Cross-Origin-Anfragen ablehnen, andere aber zulassen. Wenn Sie beispielsweise alle Cross-Origin-Anfragen ablehnen, kann niemand von einer anderen Site zu Ihrer Site navigieren!

Mithilfe von Fetch-Metadaten kann ein Server anhand des jeweiligen Anfragekontexts Regeln festlegen, nach denen Cross-Origin-Anfragen zugelassen oder abgelehnt werden.

## Richtlinie zur Ressourcenisolierung

Eine häufig verwendete Regelung ist die _Richtlinie zur Ressourcenisolierung_. Wenn der Server eine Anfrage erhält, prüft er deren Fetch-Metadaten-Header und lässt nur Folgendes zu:

- Anfragen vom selben Origin (und gegebenenfalls von derselben Site, wenn Sie Ihren Subdomains vertrauen).
- Navigationsanfragen auf oberster Ebene von einem anderen Origin, damit Benutzer Ihre Site über Links auf anderen Sites erreichen können.
- Anfragen an bestimmte Endpunkte, auf die über Origin-Grenzen hinweg zugegriffen werden soll, einschließlich solcher, die [CORS](/de/docs/Web/HTTP/Guides/CORS) verwenden.

Der folgende [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Code lässt beispielsweise nur Anfragen vom selben Origin, direkt vom Benutzer ausgelöste Anfragen und Navigationen zu.

```js
function isAllowed(req) {
  // Allow same-origin requests
  // Allow directly user-initiated requests (from bookmarks, address bar etc.)
  const secFetchSite = req.headers["sec-fetch-site"];
  if (secFetchSite === "same-origin" || secFetchSite === "none") {
    return true;
  }

  // Allow cross-site navigations, such as clicking links
  const secFetchMode = req.headers["sec-fetch-mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // Deny everything else
  return false;
}

app.get("/admin", (req, res) => {
  res.setHeader("Vary", "sec-fetch-site, sec-fetch-mode");
  if (isAllowed(req)) {
    // Respond with the admin page if the user is admin
    getAdminPage(req, res);
  } else {
    res.status(403).send("Forbidden");
  }
});
```

Beachten Sie, dass der Code auch den Antwort-Header {{httpheader("Vary")}} sendet. Dadurch wird sichergestellt, dass eine zwischengespeicherte Antwort nur für Anfragen mit denselben Werten der hier verwendeten Fetch-Metadaten-Header ausgegeben wird.

Die Seite [Resource Isolation Policy](https://xsleaks.dev/docs/defenses/isolation-policies/resource-isolation/) enthält weitere Codebeispiele für eine Richtlinie zur Ressourcenisolierung.

## Siehe auch

- [CSRF](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Schützen Sie Ihre Ressourcen mit Fetch-Metadaten vor Webangriffen](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch-Metadaten](https://xsleaks.dev/docs/defenses/opt-in/fetch-metadata/) (XS-Leaks Wiki)
