---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 43bd841296433b2c1adb8fa9d819212f86b37358
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Origin-Agent-Cluster`** wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) einem origin-basierten oder site-basierten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) zugeordnet wird.
Bei aktivierter origin-basierter Zuordnung sollen Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Verarbeitung des Dokuments verwendet werden, nur mit anderen Dokumenten derselben {{Glossary("origin", "Origin")}} geteilt werden, nicht aber mit dokumentenübergreifenden Origins derselben Site.

Dadurch ist es weniger wahrscheinlich, dass ein ressourcenintensives Dokument die Leistung von Dokumenten anderer Origins beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Direktiven

- `<boolean>`
  - : Ein strukturierter boolescher Wert, der die angeforderte Zuordnung des Agent-Clusters angibt:
    - `?1`
      - : Fordert an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) einem origin-basierten Agent-Cluster zugeordnet wird.
    - `?0`
      - : Fordert einen site-basierten Agent-Cluster an. Dies ermöglicht die Kommunikation zwischen verschiedenen Origins derselben Site, indem [`Document.domain`](/de/docs/Web/API/Document/domain) gesetzt wird.

    Browser stellen derzeit den Standardwert von `?0` auf `?1` um.

## Beschreibung

Moderne Webbrowser haben eine Multiprozessarchitektur, bei der Seiten verschiedener Origins in unterschiedlichen Betriebssystemprozessen ausgeführt werden können. Das ist für die Leistung wichtig, da sich eine ressourcenintensive Seite dadurch weniger stark auf andere Seiten auswirkt, die der Benutzer geöffnet hat.

Im Allgemeinen können Browser jedoch Seiten derselben {{Glossary("site", "Site")}} mit unterschiedlichen {{Glossary("origin", "Origins")}} nicht in getrennten Prozessen ausführen. Der Grund dafür sind bestimmte DOM-APIs, die eine Kommunikation zwischen verschiedenen Origins derselben Site voraussetzen. Beispielsweise teilen Seiten der folgenden beiden Origins standardmäßig dieselben Betriebssystemressourcen:

```plain
https://apples.example.org
https://oranges.example.org
```

Indem eine Seite den Header `Origin-Agent-Cluster` auf `?1` setzt, kann sie anfordern, dass der Browser dieser Origin eigene Ressourcen zuweist, die nicht mit anderen Origins geteilt werden.

Der Browser muss dieser Anforderung nicht nachkommen. Tut er es, gibt die Eigenschaft [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) `true` zurück. Das Fenster kann dann die folgenden Aktionen nicht ausführen, da sie alle von der Kommunikation zwischen verschiedenen Origins derselben Site abhängen:

- [`Document.domain`](/de/docs/Web/API/Document/domain) setzen.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte mithilfe von [`postMessage()`](/de/docs/Web/API/Window/postMessage) an andere Seiten derselben Site mit einer anderen Origin senden.
- {{jsxref("SharedArrayBuffer")}}- oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte an andere Seiten derselben Site mit einer anderen Origin senden.

Origin-basierte Agent-Cluster sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder sie so umsetzen, dass kein Speicherschutz gewährleistet ist (zum Beispiel durch getrennte Threads statt getrennter Prozesse). Diese Funktion ist vielmehr ein Hinweis darauf, dass eigene Ressourcen für diese Origin die Benutzererfahrung verbessern würden.

Angenommen, Ihre Site enthält eine Seite, die einen iframe derselben Site, aber einer anderen Origin einbettet. In diesem iframe läuft ein ressourcenintensives Spiel. Wenn Sie `Origin-Agent-Cluster` für das Dokument im iframe setzen, können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten einer bestimmten Origin entweder origin-basiert sind oder nicht. Das bedeutet:

- Wenn die erste Seite einer Origin den Header auf `?0` setzt und site-basiert zugeordnet wird, werden keine anderen Seiten dieser Origin origin-basiert zugeordnet, selbst wenn diese den Header setzen.
- Wenn die erste Seite einer Origin den Header auf `?1` setzt und origin-basiert zugeordnet wird, werden alle anderen Seiten dieser Origin ebenfalls origin-basiert zugeordnet, unabhängig davon, ob sie dies anfordern.

Um eine solche unvorhersehbare Situation zu vermeiden, sollten Sie diesen Header entweder für alle Seiten einer bestimmten Origin oder für keine davon setzen.

## Beispiele

### Origin-basierte Zuordnung anfordern

In Browserversionen, in denen `?0` der Standardwert ist (historisches Verhalten), ist nur die folgende Einstellung sinnvoll:

```http
Origin-Agent-Cluster: ?1
```

### Site-basierte Zuordnung anfordern

In Browserversionen, in denen `?1` der Standardwert ist (neues Verhalten), ist nur die folgende Einstellung sinnvoll:

```http
Origin-Agent-Cluster: ?0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster)
- [Agent-Cluster und gemeinsame Speichernutzung](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) im _JavaScript-Ausführungsmodell_
- [Leistungsisolierung mit dem Origin-Agent-Cluster-Header anfordern](https://web.dev/articles/origin-agent-cluster) auf web.dev
