---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem origin-gebundenen [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert werden soll. Dies bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten vom gleichen {{Glossary("origin", "Ursprung")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : `?1` zeigt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem origin-gebundenen Agenten-Cluster platziert werden soll. Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für falsch).

## Beschreibung

Moderne Webbrowser haben eine Mehrprozessarchitektur, bei der Seiten von verschiedenen Ursprüngen in verschiedenen Betriebssystemprozessen laufen können. Dies ist wichtig für die Leistung, weil es bedeutet, dass eine ressourcenintensive Seite nicht so stark andere Seiten beeinträchtigt, die der Benutzer geöffnet hat.

Browser können jedoch generell nicht {{Glossary("site", "selbseite")}}, {{Glossary("origin", "cross-origin")}} Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die von selbseite, cross-origin Kommunikation abhängen. Zum Beispiel teilen standardmäßig Seiten der folgenden zwei Ursprünge die gleichen Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster`-Headers kann eine Seite anfordern, dass der Browser diesem Ursprung dedizierte Ressourcen zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, der Anfrage nachzukommen. Wenn er dies tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück und das Fenster kann die folgenden Dinge nicht tun, die alle von selbseite, cross-origin Kommunikation abhängen:

- Verwenden Sie [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden Sie [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte an andere selbseite cross-origin Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden Sie {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte an andere selbseite cross-origin Seiten.

Origin-gebundene Agenten-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder sie auf eine Weise implementieren, die keinen Speicherschutz bietet (z.B. durch die Verwendung separater Threads anstelle separater Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen werden würden.

Angenommen, Ihre Seite enthält eine Seite von einem Ursprung, die ein selbseite, cross-origin iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf dem Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einem bestimmten Ursprung entweder origin-gebunden sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, dann werden keine anderen Seiten von diesem Ursprung origin-gebunden, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und origin-gebunden wird, dann werden alle anderen Seiten von diesem Ursprung origin-gebunden, unabhängig davon, ob sie darum bitten oder nicht.

Um dieser Art von unvorhersehbarer Situation vorzubeugen, sollten Sie diesen Header für alle Seiten von einem bestimmten Ursprung setzen, oder für keine.

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
- [Agenten-Cluster und Speicherfreigabe](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) im _JavaScript-Ausführungsmodell_
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
