---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um zu verlangen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-gebundenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert wird. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten aus dem gleichen {{Glossary("origin", "Origin")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten anderer Origine beeinträchtigt.

Moderne Webbrowser haben eine Multiprozess-Architektur, in der Seiten von verschiedenen Originen in verschiedenen Betriebssystemprozessen laufen können. Das ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite weniger Einfluss auf andere vom Benutzer geöffnete Seiten hat.

Allerdings können Browser nicht generell {{Glossary("site", "site-gleiche")}}, {{Glossary("origin", "cross-origin")}}-Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die auf site-gleiche, cross-origin-Kommunikation angewiesen sind. Zum Beispiel werden standardmäßig Seiten von den folgenden zwei Originen die gleichen Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch Setzen des `Origin-Agent-Cluster`-Headers kann eine Seite anfordern, dass der Browser diesem Origin dedizierte Ressourcen zuweist, die nicht mit anderen Originen geteilt werden.

Der Browser ist nicht dazu verpflichtet, die Anfrage zu berücksichtigen. Wenn er es tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster kann folgende Dinge nicht tun, die alle auf site-gleiche, cross-origin-Kommunikation angewiesen sind:

- Verwendung von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekten an andere site-gleiche cross-origin-Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekten an andere site-gleiche cross-origin-Seiten.

Origin-gebundene Agenten-Cluster sollten nicht als Sicherheitsmerkmal betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder es auf eine Weise implementieren, die keinen Speicherschutz bietet (zum Beispiel durch Verwendung separater Threads statt separater Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert wird, wenn diesem Origin dedizierte Ressourcen zugewiesen werden.

Zum Beispiel, nehmen wir an, Ihre Seite enthält eine Seite von einem Origin, das ein site-gleiches, cross-origin-iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch Setzen von `Origin-Agent-Cluster` auf das Dokument im iframe kann verhindert werden, dass das Spiel die Leistung der Hauptseite beeinflusst.

Der Browser wird sicherstellen, dass alle Seiten von einem gegebenen Origin entweder origin-gebunden sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Origin den Header nicht setzt, dann werden auch keine anderen Seiten von diesem Origin origin-gebunden sein, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Origin den Header setzt und origin-gebunden wird, dann werden alle anderen Seiten von diesem Origin origin-gebunden, unabhängig davon, ob sie es verlangen oder nicht.

Um diese Art von unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem gegebenen Origin setzen, oder für keine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : `?1` bedeutet, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem origin-gebundenen Agenten-Cluster platziert werden soll.
    Andere Werte als `?1` werden ignoriert (z. B. das `?0` strukturierte Feld für falsch).

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
