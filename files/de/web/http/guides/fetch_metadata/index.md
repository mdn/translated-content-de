---
title: Fetch-Metadaten
slug: Web/HTTP/Guides/Fetch_metadata
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

**Fetch-Metadaten** ist der Begriff für eine Gruppe von HTTP-Anforderungs-Headern, die dem Server Informationen über den Kontext geben, in dem die Anforderung gestellt wird.

Fetch-Metadaten ermöglichen es dem Server unter anderem zu wissen:

- Ob die Anforderung eine Navigation zwischen Dokumenten darstellt, eine Anforderung für eine Subressource ist oder ausdrücklich von JavaScript erstellt wurde, zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API.

- Die Beziehung zwischen dem Anforderer der Ressource und der angeforderten Ressource: ob sie vom gleichen {{Glossary("origin", "origin")}} oder vom gleichen {{Glossary("site", "site")}} stammen oder von völlig unterschiedlichen Seiten.

Indem der Server die Informationen in diesen Headern nutzt, um spezifische Anfragen zuzulassen oder abzulehnen, kann er eine Verteidigung gegen [_cross-origin Angriffe_](#cross-origin-angriffe) wie [Cross-Site Request Forgeries (CSRF)](/de/docs/Web/Security/Attacks/CSRF) und verschiedene [Cross-Site Leaks](/de/docs/Web/Security/Attacks/XS-Leaks) implementieren.

## Fetch-Metadaten-Header

Die [Fetch-Metadaten-Spezifikation](https://w3c.github.io/webappsec-fetch-metadata/) definiert vier Fetch-Metadaten-Header:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Wie alle mit `Sec-` präfixierten Header sind dies {{Glossary("forbidden_request_header", "verbotene Anforderungs-Header")}}, was bedeutet, dass sie vom Frontend-Code der Website nicht gesetzt oder modifiziert werden können.

### Sec-Fetch-Dest

Dieser Header gibt das _Ziel_ der Anforderung an. Dieses Attribut ist in der Fetch-API definiert, wo es als [`Request.destination`](/de/docs/Web/API/Request/destination)-Eigenschaft zugänglich ist.

Man könnte ihn ungefähr so ansehen, wie die zurückgegebene Ressource verwendet werden würde.

Bei den meisten {{Glossary("replaced_elements", "ersetzten Elementen")}} benennt der Wert des Headers das Element, für das diese Ressource verwendet wird, wie `iframe`, `object`, `audio` oder `video`. Ein Wert von `image` gibt an, dass die Ressource als Bild verwendet wird, das von einem ersetzten Element wie einem HTML-{{htmlelement("img")}}-Element, einer CSS-{{cssxref("background-image")}}-Eigenschaft, einem SVG-{{svgelement("image")}} oder an einer anderen Stelle in der Web-Plattform, die Bilder aus Subressourcen nutzt, referenziert wird.

Weitere interessante Zielwerte sind:

- `document`
  - : Die Anforderung gilt für ein neues Dokument, das das Ziel einer Top-Level-Navigation ist (zum Beispiel, wenn der Benutzer auf einen Link auf der Seite klickt oder ein Formular absendet).

- `script`
  - : Die Ressource wird als Skript geladen, das von einem HTML-{{htmlelement("script")}}-Element oder einem Aufruf von [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) in einem Web-Worker geladen wird.

    Spezifischere Werte werden verwendet, um andere Orte anzuzeigen, an denen die Ressource als Skript verwendet wird, wie Worklets (`audioworklet` und `paintworklet`) und Worker (`sharedworker`, `serviceworker` und `worker`).

- `empty`
  - : Die Anforderung hat kein definiertes Ziel: unter anderen möglichen Ursachen ist dies der Wert, der gegeben wird, wenn die Anforderung das Ergebnis eines [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufrufs ist.

Für die vollständige Liste möglicher Werte siehe die {{HTTPHeader("Sec-Fetch-Site", "Referenzseite", "", "nocode")}} für diesen Header.

### Sec-Fetch-Mode

Dieser Header gibt den _Modus_ der Anforderung an. Wie beim _Ziel_ ist der Modus in der [Fetch-API](/de/docs/Web/API/Fetch_API) definiert, wo er als [`Request.mode`](/de/docs/Web/API/Request/mode)-Eigenschaft zugänglich ist.

Die am häufigsten genutzten Werte sind:

- `navigate`
  - : Die Anforderung stellt eine Navigation zwischen Dokumenten dar (zum Beispiel, wenn der Benutzer auf einen Link klickt).

- `no-cors`
  - : Die Anforderung wurde im `no-cors`-Modus gestellt.

    Das bedeutet, dass sie ohne die richtigen [CORS](/de/docs/Web/HTTP/Guides/CORS)-Header serverseitig erlaubt ist Cross-Origin, mit der Einschränkung, dass die Antwort nicht von JavaScript im Client abgerufen werden kann (sie ist _undurchsichtig_).

    Dies ist der Standardmodus für Seiten, die Subressourcen wie Bilder, Schriften, Skripte und Stylesheets laden, und erklärt, warum eine andere Seite standardmäßig Ihre Subressourcen verwenden darf, auch wenn Sie CORS nicht konfiguriert haben, um dies zu erlauben.

- `cors`
  - : Wenn die Anforderung Cross-Origin ist, muss der Server mit den richtigen [CORS](/de/docs/Web/HTTP/Guides/CORS)-Headern antworten, oder die Anforderung wird fehlschlagen. Wenn der Server mit den richtigen CORS-Headern antwortet, werden der Antwortkörper und bestimmte Header dem Anforderer zur Verfügung gestellt.

    Dies findet sich am häufigsten bei Cross-Origin-Anfragen, die über JavaScript unter Verwendung der [Fetch-API](/de/docs/Web/API/Fetch_API) gestellt werden, wenn der Anforderer Zugriff auf die zurückgegebene Ressource benötigt (zum Beispiel ein Fetch-Aufruf, um JSON vom Server abzurufen).

- `same-origin`
  - : Die Anforderung ist nur erlaubt, wenn der Anforderer gleichen Ursprung mit der angeforderten Ressource hat.

### Sec-Fetch-Site

Dieser Header zeigt die Beziehung zwischen dem Ursprung der angeforderten Ressource und dem Ursprung des Anforderers der Ressource an.

Er zeigt an, ob der Anforderer von:

- Dem gleichen {{Glossary("origin", "origin")}} wie die angeforderte Ressource stammt.
- Einem anderen Ursprung, aber der gleichen {{Glossary("site", "site")}}.
- Einer anderen site.

Zum Beispiel, wenn ein Benutzer auf einen Link in einer Seite unter `https://books.example.org/authors` klickt, erstellt der Browser eine Anfrage, um das im Linkziel angegebene Dokument abzurufen. Die folgende Tabelle zeigt die Werte des zugehörigen `Sec-Fetch-Site`-Headers für verschiedene Linkzielwerte:

| Linkziel                           | `Sec-Fetch-Site`-Wert |
| ---------------------------------- | --------------------- |
| `https://books.example.org/titles` | `same-origin`         |
| `https://login.example.org/`       | `same-site`           |
| `https://books.example.com/titles` | `cross-site`          |

Ähnliche Abbildungen gelten für andere HTTP-Anfragen, wie:

- Formularübermittlungen über das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut eines {{htmlelement("form")}}-Elements.
- Anfragen für Subressourcen wie Bilder, Schriften oder Skripte.
- Anfragen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gestellt werden.

Der `Sec-Fetch-Site`-Header kann auch den Wert `none` für Anfragen haben, die keine site als Anforderer haben, einschließlich zum Beispiel Anfragen, die gemacht werden, wenn der Benutzer eine URL in die Adressleiste des Browsers eingibt oder ein Lesezeichen anklickt. Die Spezifikation nennt diese [direkt durch den Benutzer initiierte Anforderungen](https://w3c.github.io/webappsec-fetch-metadata/#directly-user-initiated).

### Sec-Fetch-User

Dieser Header wird nur hinzugefügt, wenn die Anforderung durch eine Benutzeraktion (wie ein Klick auf einen Link) initiiert wurde, und wenn er hinzugefügt wird, hat er immer den Wert `?1`.

## Cross-Origin-Angriffe

Fetch-Metadaten sind besonders nützlich als Verteidigung gegen _Cross-Origin-Angriffe_. Diese Angriffe zielen typischerweise auf einen Benutzer ab, der ein Konto bei einer legitimen Website hat und bei dieser angemeldet ist. Der Angreifer erstellt eine Website, die eine _Cross-Origin-Anfrage_ an die legitime Website stellt und dann den Benutzer dazu verleitet, diese Anfrage auszuführen.

> [!NOTE]
> Wir verwenden den Begriff _Cross-Origin_-Angriff in diesem Leitfaden, obwohl viele Angriffe traditionell _Cross-Site_-Angriffe genannt werden.
>
> Ein {{Glossary("origin", "origin")}} ist ein restriktiveres Konzept als eine {{Glossary("site", "site")}}. Insbesondere umfasst eine site auch die Subdomains einer Domain, ein origin jedoch nicht: so sind `https://example.org` und `https://login.example.org` die gleiche site, aber unterschiedliche origins.
>
> Das bedeutet, dass, während alle Cross-Site-Angriffe Cross-Origin-Angriffe sind, einige Cross-Origin-Angriffe _keine_ Cross-Site-Angriffe sind. Wenn ein Angreifer beispielsweise die Kontrolle über eine Subdomain einer site erlangt, kann er die site mit _Cross-Origin_, _same-site_-Anfragen angreifen. Um diese Angriffe einzuschließen, verwenden wir den restriktiveren Begriff.

Zum Beispiel könnte die Seite des Angreifers ein {{htmlelement("form")}}-Element enthalten, das an die legitime Seite gesendet wird. Für einige Cross-Origin-Angriffe ist keine Benutzerinteraktion erforderlich: Die Seite des Angreifers kann einfach eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an die legitime Seite beim Page-Load ausführen, und der Benutzer muss nur die Seite des Angreifers öffnen, damit die Cross-Origin-Anfrage ausgeführt wird.

Da die Anfrage vom Browser des Benutzers stammt, wird sie alle Cookies enthalten, die für den Benutzer von der legitimen Seite gesetzt wurden, einschließlich der Cookies, die die legitime Seite zur Identifizierung von Benutzern verwendet. Die Anfrage wird daher mit den Berechtigungen für diesen Benutzer akzeptiert.

Wir können zwei Arten von Cross-Origin-Angriffen unterscheiden:

- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffe: Bei diesen Angriffen führt die Cross-Origin-Anfrage eine relevante Aktion auf dem legitimen Server aus, wobei Parameter verwendet werden, die vom Angreifer bereitgestellt werden. Zum Beispiel fordert die Anfrage den Server auf, Geld vom Konto des Zielbenutzers auf das des Angreifers zu überweisen.

- [Cross-Site Leaks](/de/docs/Web/Security/Attacks/XS-Leaks): Bei diesen Angriffen verwendet der Angreifer die Anfrage, um Informationen über die Beziehung des Benutzers zu der Zielseite zu erlangen, oft über Seitenkanäle wie [Fehlerereignisse](/de/docs/Web/Security/Attacks/XS-Leaks#leaking_page_existence_using_error_events).

Die meisten Websites möchten einige Cross-Origin-Anfragen ablehnen, während sie andere zulassen: Wenn Sie zum Beispiel alle Cross-Origin-Anfragen ablehnen, wird niemand in der Lage sein, von einer anderen Seite auf Ihre Seite zu navigieren!

Unter Verwendung von Fetch-Metadaten kann ein Server eine Richtlinie erstellen, um Cross-Origin-Anfragen basierend auf den Detailinformationen über ihren Kontext zuzulassen oder abzulehnen.

## Richtlinie zur Ressourcenisolation

Eine häufige Art von Richtlinie wird als _Ressourcenisolationsrichtlinie_ bezeichnet. Wenn der Server eine Anfrage erhält, untersucht er die Anfragen-Metadaten-Header, um nur Folgendes zuzulassen:

- Same-Origin-Anfragen (und manchmal same-site-Anfragen, wenn Sie Ihren Subdomains vertrauen).
- Top-Level-Navigationsanforderungen von einem anderen Ursprung, sodass Benutzer Ihre Seite durch Klicken von Links auf anderen Seiten erreichen können.
- Anfragen zu bestimmten Endpunkten, die Cross-Origin aufgerufen werden sollen, einschließlich solcher, die [CORS](/de/docs/Web/HTTP/Guides/CORS) verwenden.

Das folgende [Express](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)-Beispiel erlaubt nur Same-Origin-Anfragen, direkt vom Benutzer initiierte Anfragen und Navigationen.

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

Es sendet außerdem den {{httpheader("Vary")}}-Antwort-Header. Dies stellt sicher, dass, wenn die Antwort zwischengespeichert wird, die zwischengespeicherte Antwort nur für Anfragen mit den gleichen Werten für die von uns verwendeten Fetch-Metadaten-Header bereitgestellt wird.

Die [Resource Isolation Policy](https://xsleaks.dev/docs/defenses/isolation-policies/resource-isolation/)-Seite bietet weiteren Beispielcode für eine Ressourcenisolationsrichtlinie.

## Siehe auch

- [CSRF](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-Site Leaks](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata](https://xsleaks.dev/docs/defenses/opt-in/fetch-metadata/) (XS-Leaks Wiki)
