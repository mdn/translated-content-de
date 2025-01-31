---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwortheader")}} wird verwendet, um zu verlangen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem **herkunftsschlüsselten [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)** platziert wird. Das bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten derselben {{Glossary("origin", "Herkunft")}} geteilt werden sollten.

Der Effekt ist, dass ein ressourcenintensives Dokument die Leistung von Dokumenten anderer Herkunft weniger wahrscheinlich verschlechtert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : `?1` zeigt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem herkunftsschlüsselten Agent-Cluster platziert werden sollte.
    Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für false).

## Beschreibung

Moderne Webbrowser haben eine Mehrprozessarchitektur, in der Seiten von verschiedenen Herkünften in unterschiedlichen Betriebssystemprozessen ausgeführt werden können. Das ist wichtig für die Leistung, weil es bedeutet, dass eine ressourcenintensive Seite nicht so stark auf andere Seiten einwirkt, die der Benutzer geöffnet hat.

Browser können jedoch im Allgemeinen keine {{Glossary("site", "gleichseitigen")}}, {{Glossary("origin", "herkunftsübergreifenden")}} Seiten in verschiedenen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die von gleichseitiger, herkunftsübergreifender Kommunikation abhängen. Zum Beispiel werden Seiten von den folgenden zwei Herkünften standardmäßig die gleichen Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite verlangen, dass der Browser dieser Herkunft dedizierte Ressourcen zuweist, die mit keiner anderen Herkunft geteilt werden.

Der Browser ist nicht verpflichtet, der Anfrage nachzukommen. Wenn er es tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster kann die folgenden Aktionen, die alle auf gleichseitige, herkunftsübergreifende Kommunikation angewiesen sind, nicht ausführen:

- Verwendung von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekten an andere gleichseitige herkunftsübergreifende Seiten mittels [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekten an andere gleichseitige herkunftsübergreifende Seiten.

Herkunftsschlüsselte Agent-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anfrage aus verschiedenen Gründen ignorieren oder wählen, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (zum Beispiel durch Verwendung von separaten Threads anstelle von separaten Prozessen). Stattdessen ist dieses Feature ein Hinweis darauf, dass das Benutzererlebnis verbessert würde, wenn dieser Herkunft dedizierte Ressourcen zugewiesen würden.

Nehmen Sie beispielsweise an, Ihre Seite enthält eine Seite von einer Herkunft, die ein gleichseitiges, herkunftsübergreifendes iframe einbettet, welches ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf dem Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einer gegebenen Herkunft entweder herkunftsbezogen sind oder nicht. Das bedeutet:

- Wenn die erste Seite von einer Herkunft den Header nicht setzt, dann werden keine anderen Seiten von dieser Herkunft herkunftsbezogen sein, auch wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite von einer Herkunft den Header setzt und herkunftsbezogen ist, dann werden alle anderen Seiten von dieser Herkunft herkunftsbezogen sein, unabhängig davon, ob sie es verlangen oder nicht.

Um solch eine unvorhersehbare Situation zu vermeiden, sollten Sie diesen Header für alle Seiten von einer gegebenen Herkunft setzen oder für keine davon.

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
- [Anfrage zur Leistungsisolierung mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
