---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 1f954d6cdf659fd24ee36466f304bbbbeccff94d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Origin-Agent-Cluster`** HTTP-Response-Header wird verwendet, um zu verlangen, dass das zugehörige {{domxref("Document")}} in einem ursprungsbezogenen [Agent Cluster](https://tc39.es/ecma262/#sec-agent-clusters) platziert wird. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten desselben {{glossary("origin")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten anderer Ursprünge beeinträchtigen wird.

Moderne Webbrowser haben eine Architektur mit mehreren Prozessen, in der Seiten aus unterschiedlichen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten wirkt, die der Benutzer geöffnet hat.

Browser können jedoch im Allgemeinen keine {{glossary("site", "same-site")}}, {{glossary("origin", "cross-origin")}}-Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf die Kommunikation zwischen gleichseitigen, Cross-Origin-Seiten angewiesen sind. Zum Beispiel teilen sich standardmäßig Seiten der folgenden zwei Ursprünge dieselben Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch Setzen des `Origin-Agent-Cluster` Headers kann eine Seite verlangen, dass der Browser diesem Ursprung dedizierte Ressourcen zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, die Anfrage zu honorieren. Wenn er es tut, gibt die Eigenschaft {{domxref("Window.originAgentCluster")}} `true` zurück, und das Fenster kann die folgenden Dinge nicht tun, die alle auf gleichseitige, Cross-Origin-Kommunikation angewiesen sind:

- Verwenden von {{domxref("Document.domain")}}.
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekte an andere gleichseitige Cross-Origin-Seiten unter Verwendung von {{domxref("Window.postMessage()", "postMessage()")}}.
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekten an andere gleichseitige Cross-Origin-Seiten.

Origin-bezogene Agenten-Cluster sollten nicht als Sicherheitsmerkmal betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder sie auf eine Weise implementieren, die keinen Speicherschutz bietet (zum Beispiel durch Verwendung separater Threads statt getrennter Prozesse). Stattdessen ist diese Funktion ein Hinweis darauf, dass das Benutzererlebnis verbessert würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Angenommen, Ihre Website beinhaltet eine Seite von einem Ursprung, die ein gleichseitig, Cross-Origin iFrame einbettet, das ein ressourcenintensives Spiel ausführt. Durch Setzen von `Origin-Agent-Cluster` auf dem Dokument im iFrame können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser wird sicherstellen, dass alle Seiten eines gegebenen Ursprungs entweder ursprungsbezogen sind oder nicht. Das bedeutet:

- Wenn die erste Seite eines Ursprungs den Header nicht setzt, dann werden keine anderen Seiten dieses Ursprungs ursprungsbezogen sein, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite eines Ursprungs den Header setzt und ursprungsbezogen gemacht wird, dann werden alle anderen Seiten dieses Ursprungs ursprungsbezogen sein, unabhängig davon, ob sie es verlangen oder nicht.

Um eine Art von unvorhersehbarer Situation zu vermeiden, sollten Sie diesen Header für alle Seiten eines gegebenen Ursprungs setzen, oder für keine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : `?1` gibt an, dass das zugehörige {{domxref("Document")}} in einem ursprungsbezogenen Agenten-Cluster platziert werden soll.
    Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für false).

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
