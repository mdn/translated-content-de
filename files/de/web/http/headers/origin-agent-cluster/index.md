---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem **ursprungsbezogenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)** platziert wird. Das bedeutet, dass Betriebssystemressourcen (z. B. der Betriebssystemprozess), die zur Ausführung des Dokuments verwendet werden, nur mit anderen Dokumenten aus demselben {{Glossary("origin", "Ursprung")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Ursprüngen beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : `?1` gibt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem ursprungsbezogenen Agenten-Cluster platziert werden sollte.
    Andere Werte als `?1` werden ignoriert (z. B. das `?0` strukturierte Feld für false).

## Beschreibung

Moderne Webbrowser verfügen über eine Multiprozess-Architektur, in der Seiten aus verschiedenen Ursprüngen in verschiedenen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite weniger Auswirkungen auf andere Seiten hat, die der Benutzer geöffnet hat.

Allerdings können Browser in der Regel keine {{Glossary("site", "gleichortsbezogenen")}}, {{Glossary("origin", "ursprungsübergreifenden")}} Seiten in verschiedenen Prozessen ausführen, da bestimmte DOM-APIs von einer gleichortsbezogenen, ursprungsübergreifenden Kommunikation abhängen. Zum Beispiel werden standardmäßig Seiten aus den folgenden zwei Ursprüngen die gleichen Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite anfordern, dass der Browser diesem Ursprung dedizierte Ressourcen zuweist, die nicht mit anderen Ursprüngen geteilt werden.

Der Browser ist nicht verpflichtet, dieser Anforderung nachzukommen. Wenn er es tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster ist nicht in der Lage, die folgenden Dinge zu tun, die alle auf einer gleichortsbezogenen, ursprungsübergreifenden Kommunikation beruhen:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekten an andere gleichortsbezogene, ursprungsübergreifende Seiten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekten an andere gleichortsbezogene, ursprungsübergreifende Seiten.

Ursprungsbezogene Agenten-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können aus verschiedenen Gründen die Anforderung ignorieren oder sie so umsetzen, dass kein Speicherschutz bereitgestellt wird (z. B. durch Verwendung separater Threads anstelle von separaten Prozessen). Stattdessen ist diese Funktion ein Hinweis darauf, dass die Benutzererfahrung verbessert werden würde, wenn diesem Ursprung dedizierte Ressourcen zugewiesen würden.

Angenommen, Ihre Seite enthält eine Seite aus einem Ursprung, die ein gleichortsbezogenes, ursprungsübergreifendes iframe einbettet, das ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf dem Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser wird sicherstellen, dass alle Seiten von einem bestimmten Ursprung entweder ursprungsbezogen sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einem Ursprung den Header nicht setzt, dann werden keine anderen Seiten von diesem Ursprung ursprungsbezogen sein, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einem Ursprung den Header setzt und ursprungsbezogen gemacht wird, dann werden alle anderen Seiten von diesem Ursprung ursprungsbezogen, unabhängig davon, ob sie dies anfordern oder nicht.

Um solche unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten von einem bestimmten Ursprung setzen, oder für keine von ihnen.

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
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster) auf web.dev
