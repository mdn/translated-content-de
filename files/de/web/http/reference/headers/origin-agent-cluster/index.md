---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um anzufordern, dass das dazugehörige [`Document`](/de/docs/Web/API/Document) in einem origin-codierten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden soll. Das bedeutet, dass Betriebssystemressourcen (z. B. der Prozess des Betriebssystems), die zur Evaluierung des Dokuments verwendet werden, nur mit anderen Dokumenten aus dem gleichen {{Glossary("origin", "Origin")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Origins beeinträchtigen wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : `?1` zeigt an, dass das dazugehörige [`Document`](/de/docs/Web/API/Document) in einem origin-codierten Agent-Cluster platziert werden sollte. Andere Werte als `?1` werden ignoriert (z. B. das `?0` strukturierte Feld für false).

## Beschreibung

Moderne Webbrowser haben eine Mehrprozessarchitektur, in der Seiten von unterschiedlichen Origins in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten einwirken wird, die der Benutzer geöffnet hat.

Allerdings können Browser im Allgemeinen keine {{Glossary("site", "same-site")}}, {{Glossary("origin", "cross-origin")}} Seiten in unterschiedlichen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die von same-site, cross-origin Kommunikation abhängen. Zum Beispiel teilen Seiten der folgenden zwei Origins standardmäßig die gleichen Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster`-Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für dieses Origin zuweist, die nicht mit anderen Origins geteilt werden.

Der Browser ist nicht verpflichtet, der Anforderung nachzukommen. Wenn er dies tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster kann die folgenden Dinge nicht mehr tun, die alle auf same-site, cross-origin Kommunikation angewiesen sind:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekten an andere same-site, cross-origin Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekten an andere same-site, cross-origin Seiten.

Origin-codierte Agent-Cluster sollten nicht als Sicherheitsfunktion angesehen werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder sie in einer Weise implementieren, die keinen Speicherschutz bietet (z. B. durch die Verwendung separater Threads anstelle separater Prozesse). Stattdessen ist diese Funktion ein Hinweis, dass die Benutzererfahrung verbessert würde, wenn diesem Origin dedizierte Ressourcen zugewiesen würden.

Angenommen, Ihre Website enthält eine Seite von einem Origin, die ein same-site, cross-origin iframe einbettet, auf dem ein ressourcenintensives Spiel läuft. Durch das Setzen von `Origin-Agent-Cluster` für das Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einem gegebenen Origin entweder origin-codiert sind oder nicht. Das bedeutet:

- Wenn die erste Seite eines Origins den Header nicht setzt, werden keine weiteren Seiten dieses Origins origin-codiert, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite eines Origins den Header setzt und origin-codiert wird, dann werden alle anderen Seiten dieses Origins origin-codiert, unabhängig davon, ob sie darum bitten oder nicht.

Um diese Art von unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem gegebenen Origin setzen oder für keine von ihnen.

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
- [Agenten-Cluster und Speichernutzung](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) im _JavaScript-Ausführungsmodell_
- [Anfordern von Leistungsisolierung mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
