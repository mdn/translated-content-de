---
title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Origin-Agent-Cluster`** [Antwort-Header](/de-DE/docs/Glossary/response_header) wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de-DE/docs/Web/API/Document) in einem **origin-gebundenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)** platziert werden soll. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Ausführung des Dokuments verwendet werden, nur mit anderen Dokumenten vom selben [origin](/de-DE/docs/Glossary/origin) geteilt werden sollten.

Die Auswirkung davon ist, dass ein ressourcenintensives Dokument die Leistung von Dokumenten aus anderen Ursprüngen weniger beeinträchtigen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de-DE/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Anfrage-Header](/de-DE/docs/Glossary/Forbidden_request_header)</th>
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
  - : `?1` gibt an, dass das zugehörige [`Document`](/de-DE/docs/Web/API/Document) in einem origin-gebundenen Agent-Cluster platziert werden soll.
    Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für false).

## Beschreibung

Moderne Webbrowser haben eine Multiprozess-Architektur, in der Seiten von verschiedenen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten Einfluss nimmt, die der Benutzer geöffnet hat.

Allerdings können Browser nicht generell [same-site](/de-DE/docs/Glossary/site), [cross-origin](/de-DE/docs/Glossary/origin) Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die von der Kommunikation zwischen same-site und cross-origin abhängen. Zum Beispiel werden standardmäßig Seiten von den folgenden zwei Ursprüngen die gleichen Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diesen Ursprung bereitstellt, die mit keinen anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, der Anforderung nachzukommen. Wenn er dies tut, gibt die [`Window.originAgentCluster`](/de-DE/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster ist nicht in der Lage, folgende Dinge zu tun, die alle von same-site, cross-origin Kommunikation abhängen:

- Verwendung von [`Document.domain`](/de-DE/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de-DE/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekten an andere same-site cross-origin Seiten mittels [`postMessage()`](/de-DE/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de-DE/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekten an andere same-site cross-origin Seiten.

Origin-gebundene Agent-Cluster sollten nicht als Sicherheitsmerkmal angesehen werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder sich entscheiden, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (zum Beispiel durch die Verwendung separater Threads statt separater Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Zum Beispiel, wenn Ihre Seite eine Seite von einem Ursprung enthält, die ein same-site, cross-origin iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf das Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einem bestimmten Ursprung entweder origin-gebunden sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, werden keine anderen Seiten von diesem Ursprung origin-gebunden sein, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und origin-gebunden gemacht wird, werden alle anderen Seiten von diesem Ursprung origin-gebunden sein, unabhängig davon, ob sie darum bitten oder nicht.

Um ein solches unvorhersehbares Verhalten zu vermeiden, sollten Sie diesen Header entweder für alle Seiten von einem bestimmten Ursprung setzen oder für keine.

## Beispiele

```http
Origin-Agent-Cluster: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.originAgentCluster`](/de-DE/docs/Web/API/Window/originAgentCluster)
- [Anforderung von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
