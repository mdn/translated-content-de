---
title: Fetch-Metadaten
slug: Web/HTTP/Guides/Fetch_metadata
l10n:
  sourceCommit: f648561b1db8502f28a9d3664175c2000cbe9ea7
---

**Fetch-Metadaten** ist der Begriff für eine Gruppe von HTTP-Anforderungs-Headern, die dem Server Informationen über den Kontext geben, in dem die Anforderung gestellt wird.

Fetch-Metadaten erlauben dem Server unter anderem zu wissen:

- Ob die Anforderung eine Navigation zwischen Dokumenten darstellt, eine Anforderung für eine Subressource ist oder explizit durch JavaScript, zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API, gemacht wurde.

- Die Beziehung zwischen dem Anforderer der Ressource und der angeforderten Ressource: ob sie gleichen {{Glossary("origin", "Ursprungs")}}, gleiche {{Glossary("site", "Seite")}} sind oder von völlig unterschiedlichen Seiten stammen.

Indem der Server die Informationen in diesen Headern verwendet, um spezifische Anforderungen zuzulassen oder abzulehnen, kann er eine Verteidigung gegen [_Cross-Origin-Angriffe_](#cross-origin-angriffe) implementieren, wie zum Beispiel [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) und verschiedene [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks).

## Fetch-Metadaten-Header

Die [Fetch-Metadaten-Spezifikation](https://w3c.github.io/webappsec-fetch-metadata/) definiert vier Fetch-Metadaten-Header:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Wie alle `Sec-`-Präfix-Header sind diese {{Glossary("forbidden_request_header", "verbotene Anforderungs-Header")}}, was bedeutet, dass sie nicht vom Frontend-Code der Website gesetzt oder modifiziert werden können.

### Sec-Fetch-Dest

Dieser Header gibt das _Ziel_ der Anforderung an. Dieses Attribut ist im Fetch API definiert, wo es als [`Request.destination`](/de/docs/Web/API/Request/destination)-Eigenschaft verfügbar ist.

Man könnte es ungefähr so betrachten, wie die zurückgegebene Ressource verwendet würde.

Für die meisten {{Glossary("replaced_elements", "ersetzten Elemente")}} nennt der Wert des Headers das Element, für das diese Ressource verwendet wird, wie zum Beispiel `iframe`, `object`, `audio` oder `video`. Ein Wert von `image` gibt an, dass die Ressource als Bild verwendet wird, das von einem ersetzten Element wie einem HTML {{htmlelement("img")}}-Element, einer CSS-{{cssxref("background-image")}}-Eigenschaft, einem SVG-{{svgelement("image")}} oder einem anderen Ort in der Webplattform, der Bilder aus Subressourcen verwendet, referenziert wird.

Einige andere interessante Zielwerte sind:

- `document`
  - : Die Anforderung ist für ein neues Dokument, das das Ziel einer Top-Level-Navigation ist (zum Beispiel, wenn der Benutzer auf einen Link auf der Seite klickt oder ein Formular absendet).

- `script`
  - : Die Ressource wird als Skript verwendet, das von einem HTML-{{htmlelement("script")}}-Element geladen oder in einem Web Worker über einen Aufruf von [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) geladen wird.

    Spezifischere Werte werden verwendet, um andere Orte anzugeben, an denen die Ressource als Skript verwendet wird, wie Worklets (`audioworklet` und `paintworklet`) und Worker (`sharedworker`, `serviceworker` und `worker`).

- `empty`
  - : Die Anforderung hat kein definiertes Ziel: Unter anderem möglichen Ursachen ist dies der Wert, wenn die Anforderung das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs ist.

Für die vollständige Liste der möglichen Werte siehe die {{HTTPHeader("Sec-Fetch-Site", "Referenzseite", "", "nocode")}} für diesen Header.

### Sec-Fetch-Mode

Dieser Header gibt den _Modus_ der Anforderung an. Wie das _Ziel_ ist auch der Modus im [Fetch API](/de/docs/Web/API/Fetch_API) definiert, wo er als [`Request.mode`](/de/docs/Web/API/Request/mode)-Eigenschaft verfügbar ist.

Die am häufigsten verwendeten Werte sind:

- `navigate`
  - : Die Anforderung stellt eine Navigation zwischen Dokumenten dar (zum Beispiel, wenn der Benutzer auf einen Link klickt).

- `no-cors`
  - : Die Anforderung wurde im `no-cors` Modus erstellt.

    Das bedeutet, dass es übergreifend ohne die entsprechenden [CORS](/de/docs/Web/HTTP/Guides/CORS)-Header des Servers erlaubt ist, mit der Einschränkung, dass die Antwort nicht von JavaScript im Client abgerufen werden kann (sie ist _undurchsichtig_).

    Dies ist der Standardmodus für Seiten, die Subressourcen wie Bilder, Schriften, Skripte und Stylesheets laden, und erklärt, warum standardmäßig eine andere Seite Ihre Subressourcen verwenden darf, selbst wenn Sie CORS nicht so konfiguriert haben, dass es erlaubt ist.

- `cors`
  - : Wenn die Anforderung Cross-Origin ist, muss der Server mit den entsprechenden [CORS](/de/docs/Web/HTTP/Guides/CORS)-Headern antworten, andernfalls wird die Anforderung fehlschlagen. Wenn der Server mit den entsprechenden CORS-Headern antwortet, werden der Antworttext und bestimmte Header dem Anforderer zur Verfügung gestellt.

    Dies wird am häufigsten bei Cross-Origin-Anfragen gefunden, die über JavaScript mit dem [Fetch API](/de/docs/Web/API/Fetch_API) gestellt werden, wenn der Anforderer Zugriff auf die zurückgegebene Ressource benötigt (zum Beispiel ein Fetch-Aufruf, um einige JSON-Daten vom Server abzurufen).

- `same-origin`
  - : Die Anforderung ist nur erlaubt, wenn der Anforderer denselben Ursprung wie die angeforderte Ressource hat.

### Sec-Fetch-Site

Dieser Header gibt das Verhältnis zwischen dem Ursprung der angeforderten Ressource und dem Ursprung des Anforderers der Ressource an.

Er gibt an, ob der Anforderer von:

- Dem gleichen {{Glossary("origin", "Ursprung")}} wie die angeforderte Ressource stammt.
- Einem anderen Ursprung, aber der gleichen {{Glossary("site", "Seite")}}.
- Einer anderen Seite kommt.

Zum Beispiel, wenn ein Benutzer auf einen Link auf einer Seite bei `https://books.example.org/authors` klickt, fordert der Browser das im Linkziel angegebene Dokument an. Die folgende Tabelle zeigt die Werte des zugehörigen `Sec-Fetch-Site`-Headers für unterschiedliche Linkzielwerte:

| Linkziel                           | `Sec-Fetch-Site` Wert |
| ---------------------------------- | --------------------- |
| `https://books.example.org/titles` | `same-origin`         |
| `https://login.example.org/`       | `same-site`           |
| `https://books.example.com/titles` | `cross-site`          |

Ähnliche Zuordnungen gelten für andere HTTP-Anforderungen, wie zum Beispiel:

- Formularabgaben über das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut eines {{htmlelement("form")}}-Elements.
- Anforderungen für Subressourcen wie Bilder, Schriften oder Skripte.
- Anforderungen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API erstellt wurden.

Der `Sec-Fetch-Site`-Header kann auch den Wert `none` haben für Anforderungen, die keinen Site-Anforderer haben, einschließlich zum Beispiel Anforderungen, die gemacht werden, wenn der Benutzer eine URL in die Adressleiste des Browsers eingibt oder ein Lesezeichen anklickt. Die Spezifikation nennt diese [direkt vom Benutzer initiierte Anforderungen](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated).

### Sec-Fetch-User

Dieser Header wird nur eingefügt, wenn die Anforderung durch eine Benutzeraktion (wie das Klicken auf einen Link) initiiert wurde, und hat, wenn enthalten, immer den Wert `?1`.

## Cross-Origin-Angriffe

Fetch-Metadaten sind besonders nützlich als Verteidigung gegen _Cross-Origin-Angriffe_. Diese Angriffe zielen typischerweise auf einen Benutzer ab, der ein Konto bei einer legitimen Seite hat und bei dieser Seite angemeldet ist. Der Angreifer erstellt eine Website, die eine _Cross-Origin-Anforderung_ an die legitime Seite erstellt, und dann trickst der Angreifer den Benutzer dazu, diese Anforderung auszuführen.

> [!NOTE]
> Wir verwenden den Begriff _Cross-Origin_-Angriff in diesem Leitfaden, obwohl viele Angriffe konventionell _Cross-Site_-Angriffe genannt werden.
>
> Ein {{Glossary("origin", "Ursprung")}} ist ein restriktiveres Konzept als eine {{Glossary("site", "Seite")}}. Insbesondere umfasst eine Seite die Subdomains einer Domain, während ein Ursprung dies nicht tut: daher sind `https://example.org` und `https://login.example.org` die gleiche Seite, aber unterschiedliche Ursprünge.
>
> Das bedeutet, dass während alle Cross-Site-Angriffe Cross-Origin-Angriffe sind, einige Cross-Origin-Angriffe _keine_ Cross-Site-Angriffe sind. Beispielsweise, wenn ein Angreifer die Kontrolle über eine Subdomain einer Seite erlangt, dann kann er die Seite mit _Cross-Origin_, _Same-Site_-Anfragen angreifen. Um diese Angriffe einzuschließen, verwenden wir den restriktiveren Begriff.

Zum Beispiel könnte die Seite des Angreifers ein {{htmlelement("form")}}-Element enthalten, das an die legitime Seite übermittelt. Für einige Cross-Origin-Angriffe ist überhaupt keine Benutzerinteraktion erforderlich: die Seite des Angreifers kann einfach eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anforderung an die legitime Seite beim Seitenaufruf ausführen, und dann muss der Benutzer nur die Seite des Angreifers öffnen, damit die Cross-Origin-Anforderung ausgeführt wird.

Da die Anforderung vom Browser des Benutzers stammt, wird sie alle Cookies enthalten, die von der legitimen Seite für den Benutzer gesetzt wurden, einschließlich Cookies, die die legitime Seite verwendet, um Benutzer zu identifizieren. Die Anforderung erhält daher die Berechtigungen für diesen Benutzer.

Wir können zwei Arten von Cross-Origin-Angriffen unterscheiden:

- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffe: bei diesen Angriffen führt die Cross-Origin-Anforderung eine relevante Aktion auf dem legitimen Server aus, mit Parametern, die vom Angreifer bereitgestellt werden. Zum Beispiel fordert die Anforderung den Server auf, Geld vom Konto des Zielbenutzers auf das Konto des Angreifers zu überweisen.

- [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks): bei diesen Angriffen nutzt der Angreifer die Anforderung, um Informationen über die Beziehung des Benutzers zur Zielseite zu erhalten, oft über Seitenkanäle wie [Fehlerereignisse](/de/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events).

Die meisten Websites wollen einige Cross-Origin-Anforderungen ablehnen, während sie andere zulassen: zum Beispiel, wenn Sie alle Cross-Origin-Anforderungen ablehnen, kann niemand von einer anderen Seite zu Ihrer Seite navigieren!

Durch die Verwendung von Fetch-Metadaten kann ein Server eine Richtlinie erstellen, um Cross-Origin-Anforderungen basierend auf den Details ihres Kontexts zuzulassen oder abzulehnen.

## Ressourcenisolationsrichtlinie

Ein häufiger Typ von Richtlinie wird als _Ressourcenisolationsrichtlinie_ bezeichnet. Wenn der Server eine Anforderung erhält, überprüft er die Fetch-Metadaten-Header der Anforderung, um nur Folgendes zuzulassen:

- Same-Origin-Anforderungen (und manchmal auch Same-Site-Anforderungen, wenn Sie Ihren Subdomains vertrauen).
- Top-Level-Navigationsanforderungen von einem anderen Ursprung, damit Benutzer durch das Klicken auf Links auf anderen Seiten zu Ihrer Seite gelangen können.
- Anforderungen zu bestimmten Endpunkten, die dazu gedacht sind, Cross-Origin zugegriffen zu werden, einschließlich aller, die [CORS](/de/docs/Web/HTTP/Guides/CORS) verwenden.

Zum Beispiel erlaubt der folgende [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) Code nur Same-Origin-Anforderungen, direkt benutzerinitiierte Anforderungen und Navigationen.

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

Beachten Sie, dass er auch den {{httpheader("Vary")}} Antwort-Header sendet. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur an Anforderungen mit den gleichen Werten für die von uns verwendeten Fetch-Metadaten-Header gegeben wird.

Die [Ressourcenisolationsrichtlinie](https://xsleaks.dev/docs/defenses/isolation-policies/resource-isolation/) Seite bietet mehr Beispielcode für eine Ressourcenisolationsrichtlinie.

## Siehe auch

- [CSRF](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-Site-Leaks](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch-Metadaten](https://xsleaks.dev/docs/defenses/opt-in/fetch-metadata/) (XS-Leaks Wiki)
