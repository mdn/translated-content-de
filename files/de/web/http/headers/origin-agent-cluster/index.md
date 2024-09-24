---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 1f954d6cdf659fd24ee36466f304bbbbeccff94d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Antwort-Header **`Origin-Agent-Cluster`** wird verwendet, um zu verlangen, dass das zugehörige {{domxref("Document")}} in einem ursprungsbasierten [Agent Cluster](https://tc39.es/ecma262/#sec-agent-clusters) platziert wird. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten desselben {{glossary("origin")}} geteilt werden sollen.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.

Moderne Webbrowser haben eine multiprozessuale Architektur, in der Seiten aus verschiedenen Ursprüngen in unterschiedlichen Betriebssystemprozessen laufen können. Das ist wichtig für die Leistung, weil es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten, die der Benutzer geöffnet hat, einwirkt.

Allerdings können Browser im Allgemeinen keine {{glossary("site", "gleichseitigen")}}, {{glossary("origin", "cross-origin")}} Seiten in unterschiedlichen Prozessen laufen lassen, aufgrund bestimmter DOM-APIs, die auf gleichseitige, cross-origin Kommunikation angewiesen sind. Beispielsweise teilen Seiten aus den folgenden zwei Ursprüngen standardmäßig dieselben Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite beantragen, dass der Browser diesem Ursprung dedizierte Ressourcen zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, der Anfrage nachzukommen. Wenn er es tut, gibt die {{domxref("Window.originAgentCluster")}} Eigenschaft `true` zurück, und das Fenster kann folgende Dinge nicht tun, die alle auf gleichseitige, cross-origin Kommunikation angewiesen sind:

- Verwendung von {{domxref("Document.domain")}}.
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekten an andere gleichseitige, cross-origin Seiten unter Verwendung von {{domxref("Window.postMessage()", "postMessage()")}}.
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekten an andere gleichseitige, cross-origin Seiten.

Ursprungsbasierte Agent-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder sich dazu entscheiden, sie so zu implementieren, dass kein Speicherschutz geboten wird (zum Beispiel durch die Verwendung separater Threads anstelle separater Prozesse). Stattdessen ist diese Funktion ein Hinweis darauf, dass das Benutzererlebnis verbessert werden würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Zum Beispiel, nehmen wir an, Ihre Website enthält eine Seite von einem Ursprung, die ein gleichseitiges, cross-origin iFrame einbettet, das ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf das Dokument im iFrame können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser wird sicherstellen, dass alle Seiten von einem bestimmten Ursprung entweder ursprungsbasiert sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, werden keine anderen Seiten von diesem Ursprung ursprungsbasiert sein, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und ursprungsbasiert gemacht wird, dann werden alle anderen Seiten von diesem Ursprung ursprungsbasiert sein, ob sie darum bitten oder nicht.

Um solche unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem bestimmten Ursprung setzen oder für keine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Anweisungen

- `<boolean>`

  - : `?1` gibt an, dass das zugehörige {{domxref("Document")}} in einem ursprungsbasierten Agent-Cluster platziert werden soll. Andere Werte als `?1` werden ignoriert (zum Beispiel das `?0` strukturierte Feld für false).

## Beispiele

```http
Origin-Agent-Cluster: ?1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.originAgentCluster")}}
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster) auf web.dev
