---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 1f954d6cdf659fd24ee36466f304bbbbeccff94d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Origin-Agent-Cluster`** HTTP-Antwort-Header wird verwendet, um zu verlangen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _ursprungsbezogenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert wird. Dies bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten desselben [Ursprungs](/de/docs/Glossary/origin) geteilt werden sollten.

Der Effekt ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.

Moderne Webbrowser haben eine Mehrprozessarchitektur, in der Seiten von unterschiedlichen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten wirkt, die der Benutzer geöffnet hat.

Browser können jedoch in der Regel keine [same-site](/de/docs/Glossary/site), [cross-origin](/de/docs/Glossary/origin) Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf same-site, cross-origin Kommunikation angewiesen sind. Zum Beispiel werden standardmäßig Seiten von den folgenden zwei Ursprüngen dieselben Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Indem Sie den `Origin-Agent-Cluster`-Header setzen, kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diesen Ursprung bereitstellt, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, die Anforderung zu erfüllen. Wenn er dies tut, gibt die Eigenschaft [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) `true` zurück, und das Fenster kann die folgenden Aktionen nicht durchführen, die alle von same-site, cross-origin Kommunikation abhängen:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekten an andere same-site, cross-origin Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekten an andere same-site, cross-origin Seiten.

Ursprungsbezogene Agenten-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder wählen, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (zum Beispiel die Verwendung von separaten Threads anstelle von separaten Prozessen). Stattdessen ist diese Funktion ein Hinweis darauf, dass sich das Benutzererlebnis verbessern würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Zum Beispiel, nehmen wir an, Ihre Website umfasst eine Seite von einem Ursprung, die ein same-site, cross-origin `iframe` einbettet, in dem ein ressourcenintensives Spiel läuft. Durch das Setzen von `Origin-Agent-Cluster` auf das Dokument im `iframe` können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinflusst.

Der Browser stellt sicher, dass alle Seiten von einem bestimmten Ursprung entweder ursprungsbezogen sind oder nicht. Dies bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, dann sind keine anderen Seiten von diesem Ursprung ursprungsbezogen, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und ursprungsbezogen ist, dann werden alle anderen Seiten von diesem Ursprung ursprungsbezogen, unabhängig davon, ob sie es anfordern oder nicht.

Um diese Art von unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem bestimmten Ursprung setzen oder für keine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Forbidden header name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Direktiven

- `<boolean>`

  - : `?1` zeigt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem ursprungsbezogenen Agenten-Cluster platziert werden soll.
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
