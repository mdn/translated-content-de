---
title: Verwandte Website-Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 0d0ccc861fa024fa10836fbf0cc2c3813cd74745
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details zur Ablehnung.

Verwandte Website-Sets sind ein Mechanismus zur Definition einer Reihe verwandter Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn ihre Inhalte in anderen Setmitgliedern eingebettet sind, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domainnamen haben und den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand für Website-Inhalte gewähren möchten, wenn sie in einem Drittanbieterkontext innerhalb anderer verwandter Websites geladen werden (z.B. eingebettet in einem {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Websites: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden und zielt darauf ab, Benutzern eine nahtlose Navigation zwischen ihnen in einer einzigen Sitzung zu ermöglichen.
- Marken-Websites: Ein Satz von Markenressourcen kann in einer einzigen Website enthalten sein, wird jedoch über mehrere Domains bereitgestellt, einschließlich Sitzungsdaten in Bezug auf Benutzerpräferenzen, Anpassungen usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird üblicherweise durch Browserrichtlinien blockiert. Dennoch können Sie dies mit der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Website-Sets sind ein Mechanismus für progressive Verbesserung, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zwischen Websites im selben Set _ohne_ den üblichen Workflow zur Benutzerberechtigungsaufforderung, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für Benutzer von Websites im Set.

Sie sollten beachten, dass:

- Die nur in Chrome verfügbare Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Websites der obersten Ebene ermöglicht, Speicherzugriff im Namen eingebetteter Ursprungsinhalte anzufordern — nur auf Domains innerhalb eines verwandten Website-Sets unterstützt wird. Ein Beispiel finden Sie bei [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).
- Als Chrome erstmals die Standard-Storage-Access-API unterstützte (d.h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass die aufrufenden Websites Teil eines verwandten Website-Sets sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Website und bis zu fünf zugehörigen Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel sieht folgendermaßen aus:

```json
{
  "sets": [
    {
      "contact": "email address or group alias if available",
      "primary": "https://primary1.com",
      "associatedSites": [
        "https://associateA.com",
        "https://associateB.com",
        "https://associateC.com"
      ],
      "serviceSites": ["https://servicesiteA.com"],
      "rationaleBySite": {
        "https://associateA.com": "Explanation of affiliation with primary site",
        "https://associateB.com": "Explanation of affiliation with primary site",
        "https://associateC.com": "Explanation of affiliation with primary site",
        "https://serviceSiteA.com": "Explanation of service functionality support"
      },
      "ccTLDs": {
        "https://associateA.com": [
          "https://associateA.ca",
          "https://associateA.co.uk"
        ],
        "https://associateB.com": [
          "https://associateB.ru",
          "https://associateB.co.kr"
        ],
        "https://primary1.com": ["https://primary1.co.uk"]
      }
    }
  ]
}
```

> [!NOTE]
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Benutzern dieser Websites präsentiert wird.

Um ein Set zu verwenden, muss sein JSON zur `related_website_sets.JSON`-Datei hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, welches Chrome dann verwendet, um die Listen der Sets zu erhalten, auf die RWS-Verhalten angewendet wird.

### `.well-known` Dateien

Jede Website im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Struktur des Sets und die Beziehung zwischen den Websites im Set zu verifizieren.

Die `.well-known` Datei der primären Website muss ausdrücklich die vollständige Set-Struktur auflisten. `https://primary1.com` im obigen Beispiel würde eine Datei `https://primary1.com/.well-known/related-website-set.json` ähnlich der folgenden benötigen:

```json
{
  "primary": "https://primary1.com",
  "associatedSites": [
    "https://associateA.com",
    "https://associateB.com",
    "https://associateC.com"
  ],
  "serviceSites": ["https://servicesiteA.com"],
  "rationaleBySite": {
    "https://associateA.com": "Explanation of affiliation with primary site",
    "https://associateB.com": "Explanation of affiliation with primary site",
    "https://associateC.com": "Explanation of affiliation with primary site",
    "https://serviceSiteA.com": "Explanation of service functionality support"
  },
  "ccTLDs": {
    "https://associateA.com": [
      "https://associateA.ca",
      "https://associateA.co.uk"
    ],
    "https://associateB.com": [
      "https://associateB.ru",
      "https://associateB.co.kr"
    ],
    "https://primary1.com": ["https://primary1.co.uk"]
  }
}
```

Jede zugeordnete und Dienstwebsite muss ihre primäre Website in einer `.well-known` Datei angeben. Jede nicht primäre Website im obigen Beispiel (z.B. `https://associateA.com`) würde eine `/.well-known/related-website-set.json` Datei dieser Art benötigen:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, JSON-Syntax und andere Anforderungen zur Einreichung von Sets, siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Websites enthält.

Beachten Sie, dass die `.well-known` Dateien auch als Teil des Einreichungsprozesses verifiziert werden, sodass sie bereitgestellt werden müssen, bevor das zugehörige Set eingereicht wird.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Websites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)) zum Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand, die zu Websites im Set gehören, werden automatisch gewährt, ohne dass ein Benutzerberechtigungsschritt erforderlich ist.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Aufrufe können von Websites der obersten Ebene im Set gemacht werden, um Drittanbieter-Cookie-Zugriff für andere Websites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Blick auf die Sicherheit entwickelt. Es wäre katastrophal, wenn eine schädliche Website vorgeben könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erlangen. Lassen Sie uns ein theoretisches Beispiel einer schädlichen Website, `evilsite.example.com`, betrachten und einige Angriffsbeispiele ansehen, die sie durchführen könnte, die alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugehörige Website in einem anderen Set zu sein**: Wenn eine Website vorgibt, zu einem Set zu gehören (d.h. indem sie eine primäre in einer `.well-known` Datei auflistet), die nicht in der Seteinreichung und/oder der `.well-known` Datei der primären Website enthalten ist, wird sie nicht von den Vorteilen des Sets profitieren.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht ein Set ein, das einige potenzielle Opferseiten enthält**: Der Einreichungsprozess erfordert, dass `.well-known` Dateien, die von nicht primären Websites gehostet werden, ausdrücklich ihre primäre Website auflisten. Wenn diese primäre nicht mit der Seteinreichung übereinstimmt (d.h. wenn die zugeordneten/Dienstwebsites erwarten, eine andere primäre zu haben oder nicht erwarten, in einem Set zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` entführt**: Die Auswirkungen eines Hijacking-Angriffs auf eine Website innerhalb eines Sets sind nicht schlimmer, als sie normalerweise wären, sobald die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert ein aktives Opt-in durch die eingebettete Website, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}} Angriff zu vermeiden.
  - Die Nutzung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden könnte, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, wodurch ein CSRF-Angriff vermieden wird.

## Beispiele

Für Codebeispiele siehe [Verwandte Website-Sets: Entwicklerleitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2024)

## Spezifikationen

{{Specifications}}

### Standards Positionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Verwandte Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)
