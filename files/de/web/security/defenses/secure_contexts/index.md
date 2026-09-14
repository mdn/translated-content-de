---
title: Sichere Kontexte
slug: Web/Security/Defenses/Secure_Contexts
l10n:
  sourceCommit: e00894c9e1bfbf108d8234d086a6f020340a99bf
---

Ein **sicherer Kontext** ist eine Umgebung wie ein `Window` oder `Worker`, die einen definierten Standard für Authentifizierung und Vertraulichkeit erfüllt. Viele Web-APIs und Funktionen sind nur in einem sicheren Kontext zugänglich.

Die kanonische Definition eines sicheren Kontexts sowie die Begründung dafür, einige Funktionen der Webplattform auf sichere Kontexte zu beschränken, finden Sie in der Spezifikation [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/).

## Warum sollten einige Funktionen eingeschränkt werden?

Einige APIs im Web sind sehr leistungsfähig und ermöglichen einem Angreifer unter anderem Folgendes:

- In die Privatsphäre eines Benutzers eindringen.
- Zugriff auf niedriger Ebene auf den Computer eines Benutzers erlangen.
- Zugriff auf Daten wie Benutzeranmeldedaten erlangen.

Wenn diese APIs für Inhalte verfügbar wären, die nicht über eine sichere Verbindung bereitgestellt werden, könnte ein Angreifer als [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM) darauf zugreifen.

## Wann gilt ein Kontext als sicher?

Als erste Annäherung:

- Dokumente sind sichere Kontexte, wenn ihre Ressourcen über eine [HTTPS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)-Verbindung bereitgestellt werden oder von einer Loopback-Adresse (lokalen Adresse) stammen. Dokumente in Frames müssen außerdem in ein Dokument eingebettet sein, das selbst ein sicherer Kontext ist.

- Workers sind sichere Kontexte, wenn sie von einem sicheren Kontext erstellt werden.

### Dokumente der obersten Ebene

Dokumente der obersten Ebene stellen einen sicheren Kontext bereit, wenn ihre URL eine [potenziell vertrauenswürdige URL](#potenziell-vertrauenswürdige-urls) ist.

Zum Beispiel:

| URL                             | Sicher                       |
| ------------------------------- | ---------------------------- |
| `https://example.com`           | ✅ Sicher (`https`-URL)      |
| `http://localhost`              | ✅ Sicher (`localhost`-URL)  |
| `file:///path/to/resource.html` | ✅ Sicher (`file`-URL)       |
| `http://example.com`            | ❌ Nicht sicher (`http`-URL) |

### Dokumente in Frames

Dokumente in einem {{htmlelement("iframe")}} stellen einen sicheren Kontext bereit, wenn sie von einer [potenziell vertrauenswürdigen URL](#potenziell-vertrauenswürdige-urls) bereitgestellt werden und selbst in einen sicheren Kontext eingebettet sind.

Das bedeutet, dass, wenn ein Dokument der obersten Ebene von `http://example.com` ein `<iframe>` einbettet, dessen Dokument `https://example.com` ist, das eingebettete Dokument _kein_ sicherer Kontext ist.

| iframe-URL            | URL des Elterndokuments | Sicherer Kontext |
| --------------------- | ----------------------- | ---------------- |
| `https://example.com` | `https://example.com`   | ✅ Sicher        |
| `http://example.com`  | `https://example.com`   | ❌ Nicht sicher  |
| `https://example.com` | `http://example.com`    | ❌ Nicht sicher  |

### Workers

#### Dedizierte Workers

Dedizierte Workers stellen einen sicheren Kontext bereit, wenn ihr Besitzer ein sicherer Kontext ist.

#### Gemeinsam genutzte Workers

Gemeinsam genutzte Workers folgen denselben Regeln wie dedizierte Workers.

Zusätzlich gilt:

- Wenn ein gemeinsam genutzter Worker ein sicherer Kontext ist, dürfen sich nur andere sichere Kontexte daran anhängen.
- Wenn ein gemeinsam genutzter Worker ein nicht sicherer Kontext ist, dürfen sich nur andere nicht sichere Kontexte daran anhängen.

#### Service Workers und Worklets

Nur sichere Kontexte dürfen Service Workers registrieren, daher sind Service Workers immer sichere Kontexte.

## Potenziell vertrauenswürdige URLs

Eine URL ist potenziell vertrauenswürdig, wenn einer der folgenden Punkte zutrifft:

- Ihr Wert ist `about:blank` oder `about:srcdoc`.
- Ihr Schema ist `data`.
- Ihr {{Glossary("origin", "Origin")}} ist ein [potenziell vertrauenswürdiger Origin](#potenziell-vertrauenswürdige-origins).

## Potenziell vertrauenswürdige Origins

Ein Origin ist potenziell vertrauenswürdig, wenn er Folgendes hat:

- Ein Schema von `https`, `wss` oder `file`.
- Einen Hostwert von `127.0.0.0/8` oder `::1/128`.
- Einen Hostwert von `localhost` oder `localhost.`.
- Einen Hostwert, der auf `.localhost` oder `.localhost.` endet.
- Ein Schema, das der Browser als authentifiziert betrachtet.

Dies soll im Wesentlichen Folgendes erfassen: Origins, die einen sicheren Transport über das Netzwerk verwenden, lokale Origins und Origins, die der Browser aus anderen Gründen als authentifiziert betrachtet (beispielsweise solche, die von Browser-Erweiterungen verwendet werden).

## Funktionserkennung

Seiten können mithilfe der Eigenschaft [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) oder [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) prüfen, ob sie sich in einem sicheren Kontext befinden.

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(() => {
    // …
  });
}
```

## Siehe auch

- [Auf sichere Kontexte beschränkte Plattformfunktionen](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts) — eine Liste der Funktionen, die nur in sicheren Kontexten verfügbar sind
- [`Window.isSecureContext`](/de/docs/Web/API/Window/isSecureContext) und [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext)
- <https://permission.site> — Eine Website, mit der Sie prüfen können, welche API-Berechtigungsprüfungen Ihr Browser über HTTP und HTTPS verwendet
