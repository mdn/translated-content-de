---
title: Related Website Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: 1c4e44b9e52afd2dee773171ca67c37ee9d91f37
---

{{DefaultAPISidebar("Storage Access API")}}{{Non-standard_Header}}

> [!WARNING]
> Dieses Feature wird aktuell von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details zur Ablehnung.

Verwandte Website-Sets sind ein Mechanismus zur Definition einer Gruppe von verwandten Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites standardmäßig Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) gewähren, wenn sie auf anderen Set-Mitgliedern eingebettet sind, ohne dass die Benutzer den Zugriff über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten wir Situationen, in denen Sie eine Reihe verwandter Websites mit unterschiedlichen Domainnamen haben und site-spezifischer Inhalt Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand erhalten soll, wenn er in einem dritten Kontext innerhalb anderer verwandter Sites geladen wird (d.h. eingebettet in einem {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Seiten: Eine einzelne Anwendung kann über mehrere Websites bereitgestellt werden, um den Benutzern nahtlose Navigation zwischen diesen zu ermöglichen, ohne die Sitzung zu unterbrechen.
- Marken-Websites: Eine Reihe von Markenressourcen kann in einer einzelnen Website enthalten sein, wird aber über mehrere Domains bereitgestellt, einschließlich Sitzungsdaten bezüglich Benutzerpräferenzen, Personalisierung usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird routinemäßig durch Browser-Richtlinien blockiert. Dennoch können Sie dies mit der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Verwandte Website-Sets sind ein Mechanismus zur progressiven Verbesserung, der neben der Storage Access API funktioniert. Unterstützende Browser gewähren den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zwischen Websites im gleichen Set, _ohne_ den üblichen Workflow der Nutzerberechtigung zu durchlaufen, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Dies führt zu einer benutzerfreundlicheren Erfahrung für Benutzer von Websites im Set.

Sie sollten beachten, dass:

- Die Chrome-exklusive Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Websites ermöglicht, Speicherzugriff im Namen eingebetteter Ursprungsinhalte anzufordern — nur auf Domains innerhalb eines verwandten Website-Sets unterstützt wird. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die standardmäßige Storage Access API unterstützte (das heißt die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), war es erforderlich, dass aufrufende Websites Teil eines verwandten Website-Sets sind. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein verwandtes Website-Set besteht aus einer primären Website und bis zu fünf zugeordneten Websites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel sieht wie folgt aus:

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
> Die Erläuterungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur primären Website den Benutzern dieser Websites präsentiert wird.

Um ein Set zu verwenden, muss sein JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, welche Chrome dann nutzt, um die Liste der Sets zu erhalten, auf die das RWS-Verhalten angewendet wird.

### `.well-known` Dateien

Jede Website im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) Datei unter `/.well-known/related-website-set.json` bereitstellen, die dazu dient, die Set-Struktur und die Beziehung zwischen den Websites im Set zu verifizieren.

Die `.well-known` Datei der primären Website muss die vollständige Set-Struktur explizit auflisten. `https://primary1.com` im obigen Beispiel würde eine Datei `https://primary1.com/.well-known/related-website-set.json` benötigen, die ähnlich dem folgenden ist:

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

Jede zugeordnete und Dienst-Website muss ihre primäre Website in einer `.well-known` Datei angeben. Jede nicht-primäre Website im obigen Beispiel (z.B. `https://associateA.com`) würde eine Datei `/.well-known/related-website-set.json` benötigen, die so aussieht:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details des Prozesses, der JSON-Syntax und anderer Anforderungen zur Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domain-Administratoren können ein Set erstellen, das ihre Websites enthält.

Denken Sie daran, dass die `.well-known` Dateien auch als Teil des Einreichungsprozesses überprüft werden, sodass sie vor der Einreichung des zugeordneten Sets vorhanden sein müssen.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Websites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um Drittanbieter-Cookies und unpartitionierten Zustand zuzugreifen, die zu Websites im Set gehören, werden automatisch genehmigt, und kein Benutzerberechtigungsschritt ist erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Anrufe können von Top-Level-Websites im Set gemacht werden, um Zugriff auf Drittanbieter-Cookies für andere Websites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Blick auf Sicherheit entwickelt. Es wäre katastrophal, wenn eine bösartige Website behaupten könnte, Teil eines Sets zu sein und die damit verbundenen Privilegien zu erhalten. Betrachten wir eine theoretische bösartige Website, `evilsite.example.com`, und betrachten einige Beispiele für Angriffe, die sie versuchen könnte, von denen alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugeordnete Website in einem anderen Set zu sein**: Wenn eine Website behauptet, in einem Set zu sein (d.h. indem sie eine primäre Website in einer `.well-known` Datei auflistet), aber nicht in der Set-Einreichung und/oder der `.well-known` Datei der primären Website enthalten ist, erhält sie nicht die Vorteile der Zugehörigkeit zum Set.
- **`evilsite.example.com` behauptet, eine primäre Website zu sein, und reicht ein Set ein, das einige potenzielle Opferseiten enthält**: Der Einreichungsprozess erfordert, dass die `.well-known` Dateien, die von nicht-primären Websites gehostet werden, ihre primäre Website explizit auflisten. Wenn diese primäre Website nicht mit der Set-Einreichung übereinstimmt (d.h. wenn die zugeordneten/Dienst-Websites eine andere primäre Website erwarten oder nicht erwarten, Teil eines Sets zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` übernommen**: Die Auswirkungen eines Website-Hijacking-Angriffs innerhalb eines Sets sind nicht gravierender als üblich, wenn die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Seite, sodass `site2.example.com` aufhören kann, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen {{Glossary("CSRF", "CSRF")}} Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/Guides/CORS), sodass `site2.example.com` sich entscheiden kann, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, und damit einen CSRF-Angriff zu vermeiden.

## Beispiele

Für Code-Beispiele siehe [Related Website Sets: Entwicklerleitfaden](https://privacysandbox.google.com/cookies/related-website-sets-integration) auf privacysandbox.google.com (2024)

## Spezifikationen

{{Specifications}}

### Standards Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://privacysandbox.google.com/cookies/related-website-sets) auf privacysandbox.google.com (2023)
