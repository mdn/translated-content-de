---
title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
l10n:
  sourceCommit: 92f9caeaeb478baff2b4a02a9aa5185be654dd21
---

{{HTTPSidebar}}

Der HTTP **`Origin-Agent-Cluster`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um anzufordern, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem herkunftsschlüsselbasierten [Agenten-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) platziert wird. Dies bedeutet, dass Betriebssystemressourcen (zum Beispiel der Betriebssystemprozess), die zur Ausführung des Dokuments verwendet werden, nur mit anderen Dokumenten derselben {{Glossary("origin", "Herkunft")}} geteilt werden sollten.

Der Effekt davon ist, dass ein ressourcenintensives Dokument weniger wahrscheinlich die Leistung von Dokumenten anderer Herkünfte beeinträchtigt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : `?1` zeigt an, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem herkunftsschlüsselbasierten Agenten-Cluster platziert werden sollte. Andere Werte als `?1` werden ignoriert (z. B. das `?0`-Strukturfeld für false).

## Beschreibung

Moderne Webbrowser haben eine Mehrprozessarchitektur, in der Seiten von verschiedenen Herkünften in unterschiedlichen Betriebssystemprozessen ausgeführt werden können. Dies ist wichtig für die Leistung, da es bedeutet, dass eine ressourcenintensive Seite nicht so stark die Auswirkungen auf andere Seiten hat, die der Benutzer geöffnet hat.

Allerdings können Browser in der Regel nicht gleichseithafte, {{Glossary("origin", "cross-origin")}} Seiten in unterschiedlichen Prozessen ausführen, da bestimmte DOM-APIs von einer gleichseithaften, Cross-Origin-Kommunikation abhängen. Zum Beispiel würden Seiten der folgenden zwei Herkünfte standardmäßig dieselben Betriebssystemressourcen teilen:

```plain
https://apples.example.org
https://oranges.example.org
```

Durch das Setzen des `Origin-Agent-Cluster` Headers kann eine Seite anfordern, dass der Browser dedizierte Ressourcen für diese Herkunft bereitstellt, die nicht mit anderen Herkünften geteilt werden.

Der Browser ist nicht verpflichtet, die Anforderung zu erfüllen. Wenn er dies tut, gibt die [`Window.originAgentCluster`](/de/docs/Web/API/Window/originAgentCluster) Eigenschaft `true` zurück, und das Fenster ist nicht in der Lage, folgende Dinge zu tun, die alle von gleichseithafter, Cross-Origin-Kommunikation abhängen:

- Verwendung von [`Document.domain`](/de/docs/Web/API/Document/domain).
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekte an andere gleichseithafte Cross-Origin-Seiten mit [`postMessage()`](/de/docs/Web/API/Window/postMessage) senden.
- Senden von {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekten an andere gleichseithafte Cross-Origin-Seiten.

Agenten-Cluster, die nach Herkunftsschlüsseln organisiert sind, sollten nicht als Sicherheitsfunktion betrachtet werden: Browser können die Anforderung aus verschiedenen Gründen ignorieren oder sich dafür entscheiden, sie auf eine Weise zu implementieren, die keinen Speicherschutz bietet (z. B. durch die Verwendung separater Threads anstelle separater Prozesse). Stattdessen ist dieses Feature ein Hinweis darauf, dass die Benutzererfahrung verbessert würde, wenn dieser Herkunft dedizierte Ressourcen zugewiesen würden.

Angenommen, Ihre Website enthält eine Seite von einer Herkunft, die ein gleichseithaftes, Cross-Origin-iframe einbettet, welches ein ressourcenintensives Spiel ausführt. Durch das Setzen von `Origin-Agent-Cluster` auf dem Dokument im iframe können Sie verhindern, dass das Spiel die Leistung der Hauptseite beeinträchtigt.

Der Browser stellt sicher, dass alle Seiten einer bestimmten Herkunft entweder herkunftsschlüsselbasiert sind oder nicht. Das bedeutet:

- Wenn die erste Seite einer Herkunft den Header nicht setzt, dann werden keine anderen Seiten dieser Herkunft herkunftsschlüsselbasiert sein, selbst wenn diese anderen Seiten den Header setzen.
- Wenn die erste Seite einer Herkunft den Header setzt und herkunftsschlüsselbasiert wird, dann werden alle anderen Seiten dieser Herkunft herkunftsschlüsselbasiert sein, unabhängig davon, ob sie dies anfordern oder nicht.

Um solche unvorhersehbaren Situationen zu vermeiden, sollten Sie diesen Header für alle Seiten einer gegebenen Herkunft setzen oder für keine von ihnen.

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
- [Anfordern der Leistungsisolierung mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster) auf web.dev
