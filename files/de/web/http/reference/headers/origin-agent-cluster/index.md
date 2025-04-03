---
title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTTPSidebar}}

Der HTTP-**`Origin-Agent-Cluster`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem **herkunftsschlüsselten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)** platziert wird. Dies bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Auswertung des Dokuments verwendet werden, nur mit anderen Dokumenten derselben {{Glossary("origin", "Herkunft")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten aus anderen Herkünften beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Anweisungen

- `<boolean>`
  - : `?1` zeigt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem herkunftsschlüsselten Agenten-Cluster platziert werden soll.
    Andere Werte als `?1` werden ignoriert (z.B. das `?0` strukturierte Feld für falsch).

## Beschreibung

Moderne Webbrowser haben eine Architektur mit mehreren Prozessen, in der Seiten von verschiedenen Herkünften in unterschiedlichen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so starken Einfluss auf andere Seiten hat, die der Benutzer geöffnet hat.

Allerdings können Browser im Allgemeinen keine {{Glossary("site", "same-site")}}, {{Glossary("origin", "cross-origin")}} Seiten in unterschiedlichen Prozessen ausführen, aufgrund bestimmter DOM-APIs, die von same-site, cross-origin Kommunikation abhängen. Beispielsweise teilen sich standardmäßig Seiten von den folgenden zwei Herkünften dieselben Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diese Herkunft zuweist, die mit keinen anderen Herkünften geteilt werden.

Der Browser ist nicht verpflichtet, der Anforderung nachzukommen. Wenn er es tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster kann nicht die folgenden Dinge tun, die alle von same-site, cross-origin Kommunikation abhängen:

- Verwenden von [`Document.domain`](/de/docs/Web/API/Document/domain).
- Senden von [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekten an andere same-site, cross-origin Seiten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage).
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekten an andere same-site, cross-origin Seiten.

Herkunftsschlüssel-Agenten-Cluster sollten nicht als Sicherheitsfeature betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder sich dafür entscheiden, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (zum Beispiel durch separate Threads statt durch separate Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn dieser Herkunft dedizierte Ressourcen zugewiesen würden.

Angenommen, Ihre Website umfasst eine Seite von einer Herkunft, die ein same-site, cross-origin iframe einbettet, welches ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf das Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten von einer gegebenen Herkunft entweder herkunftsschlüsselt sind oder nicht. Das bedeutet:

- Wenn die erste Seite einer Herkunft den Header nicht setzt, dann werden keine anderen Seiten dieser Herkunft herkunftsschlüsselt sein, selbst wenn die anderen Seiten den Header setzen.
- Wenn die erste Seite einer Herkunft den Header setzt und herkunftsschlüsselt wird, dann werden alle anderen Seiten dieser Herkunft herkunftsschlüsselt sein, unabhängig davon, ob sie es anfordern oder nicht.

Um diesen unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten einer gegebenen Herkunft setzen, oder für keine.

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
- [Anfordern von Leistungsisolierung mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
