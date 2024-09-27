---
title: Related Website Sets
slug: Web/API/Storage_Access_API/Related_website_sets
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{DefaultAPISidebar("Storage Access API")}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards Positionen](#standards_positionen) unten.

Related Website Sets sind ein Mechanismus zur Definition eines Satzes von verbundenen Websites, die vertrauenswürdige Inhalte teilen. Dadurch können Browser diesen Websites den Standardzugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) gewähren, wenn deren Inhalte in andere Mitglieder des Sets eingebettet sind, ohne dass Benutzer den Zugriff auf die [Storage Access API](/de/docs/Web/API/Storage_Access_API) über eine Berechtigungsaufforderung gewähren müssen.

## Konzepte und Nutzung

Betrachten wir Situationen, in denen Sie eine Reihe von verbundenen Websites mit unterschiedlichen Domainnamen haben und Sie diesen Webseiten den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand ermöglichen möchten, wenn sie in einem Drittanbieterkontext innerhalb anderer verbundener Websites geladen werden (d.h., eingebettet in ein {{htmlelement("iframe")}}). Typische Anwendungsfälle sind:

- App-Websites: Eine einzelne Anwendung kann auf mehreren Websites bereitgestellt werden, um Benutzern zu ermöglichen, nahtlos in einer einzelnen Sitzung zwischen ihnen zu navigieren.
- Marken-Websites: Eine Reihe von Markenressourcen kann in einer einzigen Website enthalten sein, aber dann über mehrere Domains bereitgestellt werden, einschließlich Sitzungsdaten in Bezug auf Benutzerpräferenzen, Anpassung usw.

Der Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand wird in der Regel durch Browserrichtlinien blockiert. Dennoch können Sie dies mit der Storage Access API umgehen — siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für Details.

Related Website sind ein progressiver Verbesserungsmechanismus, der zusammen mit der Storage Access API funktioniert. Unterstützende Browser gewähren den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zwischen Websites im selben Set _ohne_ dass der übliche Workflow zur Benutzerberechtigungsaufforderung durchlaufen werden muss, sobald [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) (oder [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor)) aufgerufen wird. Das führt zu einer benutzerfreundlicheren Erfahrung für die Benutzer von Websites im Set.

Folgendes sollten Sie berücksichtigen:

- Die nur in Chrome verfügbare Methode [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) — die es Top-Level-Websites ermöglicht, Speicherkapazität im Namen eingebetteter Ursprungsinhalte anzufordern — wird nur auf Domains innerhalb eines Related Website Sets unterstützt. Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein Beispiel.
- Als Chrome erstmals die Standard Storage Access API unterstützte (d. h. die Methoden [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) und [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), erforderte es, dass aufrufende Websites Teil eines Related Website Sets waren. Dies ist nicht mehr der Fall.

## Wie funktioniert RWS?

Ein Related Website Set besteht aus einer Hauptsite und bis zu fünf zugehörigen Sites.

### JSON-Struktur

Ein Set wird durch eine JSON-Struktur dargestellt. Ein hypothetisches Beispiel ist wie folgt:

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
> Die Erklärungen zur Zugehörigkeit müssen eine klare Beschreibung enthalten, wie die Zugehörigkeit zur Hauptsite den Benutzern dieser Websites dargestellt wird.

Um ein Set zu verwenden, muss dessen JSON zur Datei `related_website_sets.JSON` hinzugefügt werden, die im [Related Website Sets GitHub-Repository](https://github.com/GoogleChrome/related-website-sets/blob/main/related_website_sets.JSON) verfügbar ist, die Chrome dann verwendet, um die Liste der Sets zu erhalten, auf die das RWS-Verhalten angewendet werden soll.

### `.well-known` Dateien

Jede Site im Set muss auch eine [`.well-known`](https://en.wikipedia.org/wiki/Well-known_URI) Datei unter `/.well-known/related-website-set.json` bereitstellen, die der Verifizierung der Set-Struktur und der Beziehung zwischen den Sites im Set dient.

Die `.well-known` Datei der Hauptsite muss die vollständige Set-Struktur explizit auflisten. `https://primary1.com` im obigen Beispiel würde eine Datei `https://primary1.com/.well-known/related-website-set.json` benötigen, die folgendermaßen aussieht:

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

Jede Associate-Site und Service-Site muss ihre Hauptsite in einer `.well-known` Datei angeben. Jede Nicht-Hauptsite im obigen Beispiel (z. B. `https://associateA.com`) würde eine Datei `/.well-known/related-website-set.json` benötigen, die wie folgt aussieht:

```json
{
  "primary": "https://primary1.com"
}
```

Für vollständige Details zum Prozess, zur JSON-Syntax und zu weiteren Anforderungen an die Einreichung von Sets siehe die [Einreichungsrichtlinien](https://github.com/GoogleChrome/related-website-sets/blob/main/RWS-Submission_Guidelines.md). Nur Domainadministratoren können ein Set erstellen, das ihre Sites enthält.

Beachten Sie, dass die `.well-known` Dateien auch im Rahmen des Einreichungsprozesses verifiziert werden, daher müssen sie vor der Einreichung des zugehörigen Sets eingerichtet werden.

### Vorteile eines aktiven Sets

Sobald ein Set aktiv ist:

- Anfragen von Sites im Set (über [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)), um Zugriff auf Drittanbieter-Cookies und den unpartitionierten Zustand von Sites im Set zu erhalten, werden automatisch gewährt, und es ist kein Schritt zur Benutzerberechtigungsanforderung erforderlich.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) Aufrufe können von Top-Level-Sites im Set gemacht werden, um Drittanbieter-Cookie-Zugriff für andere Sites im Set anzufordern.

## RWS-Sicherheit

RWS wurde mit Sicherheit im Hinterkopf entwickelt. Es wäre katastrophal, wenn eine böswillige Website behaupten könnte, Teil eines Sets zu sein, und die damit verbundenen Privilegien erlangen könnte. Betrachten wir eine theoretische bösartige Website, `evilsite.example.com`, und werfen einen Blick auf einige Beispiele für Angriffe, die sie versuchen könnte, von denen alle scheitern würden:

- **`evilsite.example.com` behauptet, eine zugehörige Seite in einem anderen Set zu sein**: Wenn eine Website behauptet, in einem Set zu sein (`d.h.` indem sie eine Hauptseite in einer `.well-known` Datei auflistet) aber nicht in der Set-Einreichung und/oder der `.well-known` Datei der Hauptsite enthalten ist, werden ihr die Vorteile der Zugehörigkeit zum Set nicht gewährt.
- **`evilsite.example.com` behauptet, eine Hauptsite zu sein, und reicht ein Set ein, das einige wahrscheinliche Opferseiten enthält**: Der Einreichungsprozess erfordert, dass `.well-known` Dateien, die von Nicht-Hauptsites gehostet werden, ihre Hauptseite explizit auflisten. Wenn diese Hauptseite nicht mit der Set-Einreichung übereinstimmt (d. h. wenn die Associate-/Service-Sites erwarten, eine andere Hauptseite zu haben oder gar nicht in einem Set zu sein), wird die Einreichung abgelehnt.
- **`site1.example.com` und `site2.example.com` sind absichtlich im selben Set, aber `site1.example.com` wird von `evilsite.example.com` gehackt**: Die Auswirkungen eines Website-Hacking-Angriffs innerhalb eines Sets sind nicht schlimmer als sie normalerweise wären, sobald die anderen Websites entsprechend aktualisiert werden:
  - Die reguläre [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfordert eine aktive Zustimmung der eingebetteten Website, daher kann `site2.example.com` aufhören, `document.requestStorageAccess()` aufzurufen, wenn es in `site1.example.com` eingebettet ist, um einen [CSRF](/de/docs/Glossary/CSRF) Angriff zu vermeiden.
  - Die Verwendung von `requestStorageAccessFor()` erfordert [CORS](/de/docs/Web/HTTP/CORS), daher könnte `site2.example.com` entscheiden, nicht mit den entsprechenden CORS-Headern zu antworten, wenn Netzwerk-Anfragen von `site1.example.com` kommen, um so einen CSRF-Angriff zu vermeiden.

## Beispiele

- Die [Related Website Sets Demo](https://related-website-sets.glitch.me/) demonstriert, wie RWS verwendet wird.
- Siehe auch [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

### Standards Positionen

Zwei Browseranbieter [lehnen](/de/docs/Glossary/Web_standards#opposing_standards) diese Spezifikation ab. Bekannte Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://mozilla.github.io/standards-positions/#first-party-sets)
- Apple (Safari): [Negativ](https://webkit.org/standards-positions/#position-93)

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- [Related Website Sets](https://developers.google.com/privacy-sandbox/cookies/related-website-sets) auf developers.google.com (2023)
- [Related Website Sets: Developer Guide](https://developers.google.com/privacy-sandbox/cookies/related-website-sets-integration) auf developers.google.com (2023)
