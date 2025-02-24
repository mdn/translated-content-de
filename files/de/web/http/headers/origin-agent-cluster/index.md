---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um anzufordern, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in einem ursprungs-basierten [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters) platziert wird. Das bedeutet, dass Betriebssystem-Ressourcen (zum Beispiel der Betriebssystemprozess), die zur Verarbeitung des Dokuments verwendet werden, nur mit anderen Dokumenten vom selben {{Glossary("origin", "Ursprung")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` weist darauf hin, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in einem ursprungs-basierten Agent-Cluster platziert werden sollte.
    Andere Werte als `?1` werden ignoriert (z. B. das `?0` strukturierte Feld für false).

## Beschreibung

Moderne Webbrowser haben eine Mehrprozess-Architektur, in der Seiten von verschiedenen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so sehr andere Seiten beeinflusst, die der Benutzer geöffnet hat.

Allerdings können Browser im Allgemeinen keine {{Glossary("site", "same-site")}}, {{Glossary("origin", "cross-origin")}} Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf same-site, cross-origin Kommunikation basieren. Zum Beispiel werden standardmäßig Seiten von den folgenden zwei Ursprüngen dieselben Betriebssystem-Ressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch Setzen des `Origin-Agent-Cluster` Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diesen Ursprung zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, die Anforderung zu erfüllen. Wenn er es tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster ist nicht in der Lage, folgende Dinge zu tun, die alle auf same-site, cross-origin Kommunikation basieren:

- Verwendung von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekten an andere same-site cross-origin Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekten an andere same-site cross-origin Seiten.

Ursprungs-basierte Agent-Cluster sollten nicht als Sicherheitsfeature betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder entscheiden, sie so zu implementieren, dass kein Speicherplatzschutz bereitgestellt wird (zum Beispiel durch die Verwendung separater Threads anstelle separater Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Nehmen wir zum Beispiel an, Ihre Seite enthält eine Seite von einem Ursprung, die ein same-site, cross-origin iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch Setzen von `Origin-Agent-Cluster` auf das Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser wird sicherstellen, dass alle Seiten von einem gegebenen Ursprung entweder ursprungs-basiert sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, dann werden keine anderen Seiten von diesem Ursprung ursprungs-basiert sein, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und ursprungs-basiert gemacht wird, dann werden alle anderen Seiten von diesem Ursprung ursprungs-basiert sein, unabhängig davon, ob sie darum bitten oder nicht.

Um diese Art von unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem gegebenen Ursprung setzen oder für keine von ihnen.

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
- [Anforderung von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
