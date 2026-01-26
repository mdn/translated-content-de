---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem auf Ursprünge basierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert wird. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystem-Prozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten desselben {{Glossary("origin", "Ursprungs")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten anderer Ursprünge beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Direktiven

- `<boolean>`
  - : `?1` gibt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem auf Ursprünge basierten Agenten-Cluster platziert werden sollte. Andere Werte als `?1` werden ignoriert (z. B. das `?0`-Strukturfeld für false).

## Beschreibung

Moderne Webbrowser verfügen über eine Mehrprozessarchitektur, in der Seiten aus verschiedenen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da ein ressourcenintensive Seite dadurch weniger Auswirkungen auf andere vom Benutzer geöffnete Seiten hat.

Allerdings können Browser in der Regel keine {{Glossary("site", "gleiches Website")}}, {{Glossary("origin", "ursprungsübergreifende")}} Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf gleiches-Website, ursprungsübergreifende Kommunikation angewiesen sind. Beispielsweise werden standardmäßig Seiten von den folgenden zwei Ursprüngen die gleichen Betriebssystemressourcen gemeinsam nutzen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster`-Headers kann eine Seite anfordern, dass der Browser diesem Ursprung dedizierte Ressourcen zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, die Anforderung zu beachten. Falls doch, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)-Eigenschaft `true` zurück, und das Fenster kann die folgenden Dinge nicht tun, die alle auf gleiches-Website, ursprungsübergreifende Kommunikation angewiesen sind:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekten an andere gleiches-Website, ursprungsübergreifende Seiten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}}- oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekten an andere gleiches-Website, ursprungsübergreifende Seiten.

Ursprungs-basierte Agenten-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder beschließen, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (z. B. durch die Verwendung separater Threads anstelle separater Prozesse). Diese Funktion ist vielmehr ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Zum Beispiel, nehmen Sie an, Ihre Website enthält eine Seite von einem Ursprung, die ein gleiches-Website, ursprungsübergreifendes `iframe` einbettet, das ein ressourcenintensives Spiel ausführt. Durch Setzen von `Origin-Agent-Cluster` für das Dokument im `iframe` können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinflusst.

Der Browser stellt sicher, dass alle Seiten von einem gegebenen Ursprung entweder ursprungs-basiert sind oder nicht. Das bedeutet, dass:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, dann werden auch keine anderen Seiten dieses Ursprungs ursprungs-basiert sein, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und ursprungs-basiert wird, dann werden alle anderen Seiten dieses Ursprungs ursprungs-basiert sein, unabhängig davon, ob sie es anfordern oder nicht.

Um diese Art von unvorhersehbarer Situation zu vermeiden, sollten Sie diesen Header für alle Seiten eines bestimmten Ursprungs setzen, oder für keine.

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
- [Agenten-Cluster und Speicheraustausch](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) im _JavaScript-Ausführungsmodell_
- [Leistungsisolation mit dem Origin-Agent-Cluster-Header anfordern](https://web.dev/articles/origin-agent-cluster) auf web.dev
