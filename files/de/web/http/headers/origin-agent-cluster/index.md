---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 1f954d6cdf659fd24ee36466f304bbbbeccff94d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Antwortheader **`Origin-Agent-Cluster`** wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einen _origin-basierten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert wird. Das bedeutet, dass Betriebssystemressourcen (beispielsweise der Betriebssystemprozess), die zur Ausführung des Dokuments verwendet werden, nur mit anderen Dokumenten von derselben {{Glossary("origin", "Origin")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Origins beeinträchtigen wird.

Moderne Webbrowser haben eine Mehrprozess-Architektur, in der Seiten von verschiedenen Origins in unterschiedlichen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, denn es bedeutet, dass eine ressourcenintensive Seite weniger Einfluss auf andere Seiten hat, die der Nutzer geöffnet hat.

Browser können jedoch in der Regel keine {{Glossary("site", "same-site")}}, {{Glossary("origin", "cross-origin")}}-Seiten in unterschiedlichen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf same-site, cross-origin-Kommunikation angewiesen sind. Zum Beispiel werden standardmäßig Seiten von den folgenden zwei Origins in denselben Betriebssystemressourcen ausgeführt:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster`-Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diese Origin bereitstellt, die nicht mit anderen Origins geteilt werden.

Der Browser ist nicht verpflichtet, die Anforderung zu erfüllen. Wenn er dies tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft `true` zurück, und das Fenster kann die folgenden Dinge nicht mehr tun, die alle auf same-site, cross-origin-Kommunikation angewiesen sind:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekten an andere same-site, cross-origin-Seiten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}}- oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekten an andere same-site, cross-origin-Seiten.

Origin-basierte Agenten-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder sie in einer Weise implementieren, die keinen Speicherschutz bietet (zum Beispiel durch die Verwendung separater Threads statt separater Prozesse). Stattdessen ist diese Funktion ein Hinweis darauf, dass das Benutzererlebnis verbessert würde, wenn dieser Origin dedizierte Ressourcen zugeteilt würden.

Zum Beispiel, nehmen wir an, Ihre Site enthält eine Seite von einem Origin, die ein same-site, cross-origin iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf das Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einem bestimmten Origin entweder origin-basiert oder nicht origin-basiert sind. Dies bedeutet:

- Wenn die erste Seite von einem Origin den Header nicht setzt, dann werden keine anderen Seiten von diesem Origin origin-basiert, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Origin den Header setzt und origin-basiert wird, dann werden alle anderen Seiten von diesem Origin origin-basiert, unabhängig davon, ob sie dies anfordern oder nicht.

Um eine solche unvorhersehbare Situation zu vermeiden, sollten Sie diesen Header entweder für alle Seiten von einem bestimmten Origin setzen oder für keine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Direktiven

- `<boolean>`

  - : `?1` gibt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einen origin-basierten Agenten-Cluster platziert werden soll.
    Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für falsch).

## Beispiele

```http
Origin-Agent-Cluster: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
