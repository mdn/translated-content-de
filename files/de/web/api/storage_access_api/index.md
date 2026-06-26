---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Speicherzugriffs-API bietet eine Möglichkeit für standortübergreifende Inhalte, die in einem Drittanbieter-Kontext geladen werden (z. B. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierte Zustände](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die normalerweise nur in einem Erstanbieter-Kontext zugegriffen werden kann (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Speicherzugriffs-API ist für Benutzeragenten von Bedeutung, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände blockieren, um die Privatsphäre zu verbessern (z. B., um Tracking zu verhindern). Es gibt legitime Verwendungszwecke für Drittanbieter-Cookies und unpartitionierte Zustände, die wir auch mit diesen Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Ansichtseinstellungen über verschiedene Websites hinweg.

Die API bietet Methoden, mit denen eingebettete Ressourcen überprüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und, falls nicht, beim Benutzeragenten Zugriff anfordern können.

## Konzepte und Nutzung

Browser implementieren mehrere Funktionen und Richtlinien für den Speicherzugriff, die den Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speicherplatzes für jede eingebettete Ressource unter jedem obersten Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zum vollständigen Blockieren des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik der Funktionen und Richtlinien zur Blockierung von Drittanbieter-Cookies und unpartitionierten Zuständen unterscheiden sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Standorteigene Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf denselben Zustand, auf den sie zugreifen könnten, wenn sie in einem Erstanbieter-Kontext geladen werden. Dies erfolgt in guter Absicht — Browserhersteller möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Benutzer besser zu schützen. Beispiele beinhalten, dass weniger Tracking-Aktivitäten zwischen verschiedenen Websites möglich sind und weniger Angriffsflächen für Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) bestehen.

Es gibt jedoch legitime Verwendungszwecke für eingebettete standortübergreifende Inhalte, die auf Drittanbieter-Cookies und unpartitionierte Zustände zugreifen, und die oben genannten Funktionen und Richtlinien sind bekannt dafür, dies zu stören. Nehmen wir an, Sie haben eine Reihe verschiedener Websites, die Zugang zu unterschiedlichen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in verschiedene Länderdomains für Lokalisierungszwecke trennen — `example.com`, `example.ua`, `example.br` usw. — oder in einer anderen Weise.

Sie könnten begleitende Utility-Websites haben, die in alle anderen Websites eingebettete Komponenten bereitstellen, um beispielsweise SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Utility-Websites möchten ihren Zustand über Cookies mit den Websites teilen, in die sie eingebettet sind. Sie können keine Erstanbieter-Cookies teilen, da sie sich auf unterschiedlichen Domains befinden, und Drittanbieter-Cookies werden in Browsern, die diese blockieren, nicht mehr funktionieren.

In solchen Situationen ermutigen Website-Betreiber die Benutzer oft, ihre Website als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Drittanbieter-Cookies vollständig zu deaktivieren. Benutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungspolitik erheblich für Ressourcen lockern, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise über alle Websites hinweg.

Die Speicherzugriffs-API soll dieses Problem lösen; eingebettete standortübergreifende Inhalte können uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände auf einer Frame-zu-Frame-Basis über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) anfordern. Sie kann auch überprüfen, ob sie bereits Zugriff hat, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [Speicherzugriffs-Header](#speicherzugriffs-header) sind eine HTTP-Erweiterung der API, die einen effizienteren Workflow für die Speicher-API ermöglicht und auch verwendet werden kann, um eine zuvor gewährte Speicherzugriffsberechtigung für passive Ressourcen wie Bilder zu aktivieren.

### Unpartitionierte versus partitionierte Cookies

Die Speicherzugriffs-API wird nur benötigt, um den Zugriff auf _unpartitionierte_ Drittanbieter-Cookies bereitzustellen!
Unpartitionierte Cookies sind solche, bei denen alle auf derselben Website gesetzten Cookies im selben Cookie-Jar gespeichert werden — die traditionelle Art und Weise seit den frühen Zeiten des Webs. Da die Gefahr besteht, dass Daten, die für eine Website gedacht sind, anderen Websites zugänglich gemacht werden, blockieren Browser häufig das Senden unpartitionierter Drittanbieter-Cookies in Anfragen und lassen den Zugriff darauf in eingebetteten Kontexten nicht zu.

Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebetteten Ressourcen unter jeder obersten Website ein einzigartiger Cookie-Speicherplatz zugewiesen wird, der von denen anderer Websites isoliert ist. Da es kein Datenschutzrisiko gibt, da es nicht möglich ist, Benutzer über Sites mithilfe partitionierter Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und stellen sie eingebetteten Ressourcen zur Verfügung. Beachten Sie jedoch, dass, da die Cookies nicht zwischen Websites geteilt werden, sie auch nicht automatisch synchronisiert werden. Browser haben verschiedene Mechanismen zur Partitionierung des Zugriffs auf Drittanbieter-Cookies, beispielsweise [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

Wenn wir im Kontext der Speicherzugriffs-API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Drittanbieter-Inhalte, die in einem {{htmlelement("iframe")}} eingebettet sind und auf Cookies oder andere unpartitionierte Zustände zugreifen müssen, können mithilfe der Speicherzugriffs-API wie folgt Zugriff anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob der eingebettete Inhalt bereits Zugriff auf unpartitionierte Cookies hat.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Erlaubnis `storage-access` anzufordern.

   Abhängig vom Browser wird der Benutzer auf leicht unterschiedliche Weise gefragt, ob er der anfordernden Einbettung die Erlaubnis erteilen möchte.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem ein Ursprung auf mehr als einer Schwellenanzahl von Websites um Speicherzugriff gebeten hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben. Es wird jedoch den Zugriff automatisch gewähren und die Eingabeaufforderungen überspringen, wenn der eingebettete Inhalt und die einbettende Website Teil desselben [related website set](https://privacysandbox.google.com/cookies/related-website-sets-integration) sind.

3. Die Genehmigung wird basierend auf der Erfüllung aller Sicherheitsanforderungen erteilt oder verweigert — siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browser-spezifische Variationen](#browser-spezifische_varianten) für einige browserspezifische Sicherheitsanforderungen. Die {{jsxref("Promise")}}-basierte Natur von `requestStorageAccess()` ermöglicht Ihnen das Ausführen von Code, um Erfolgs- und Fehlerszenarien zu verarbeiten.

   Sobald die Genehmigung gewährt ist, wird ein Erlaubnisschlüssel mit der Struktur `<top-level site, embedded site>` im Browser gespeichert. Wenn die einbettende Website beispielsweise `embedder.com` ist und die Einbettung `locator.example.com`, würde der Schlüssel `<embedder.com, example.com>` sein.

   Das bedeutet, dass die Erlaubnis für den Zugriff auf unpartitionierte Cookies für jede Seite auf der Website `example.com` oder einer ihrer Subdomains, die in jede Seite auf der `embedder.com`-Website eingebettet ist, gewährt wurde. Beispielsweise können `docs.example.com`, `profile.example.com` jetzt `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt werden.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Erlaubnisschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass samesite-Cross-Origin-Einbettungen nicht mit dem Erlaubnisschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Erlaubnis muss explizit für jeden _Kontext_ aktiviert werden.

   Wenn eine Einbettung die Erlaubnis erhält, wird diese Erlaubnis auch für den aktuellen Kontext aktiviert. Andere Kontexte, wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite, haben standardmäßig keinen Zugriff auf Drittanbieter-Cookies. Das bedeutet, selbst wenn die Erlaubnis erteilt wurde, muss die Seite laden und `requestStorageAccess()` aufrufen, um die Erlaubnis zu aktivieren. Wenn die Erlaubnis bereits erteilt wurde, erfordert ein Aufruf von `requestStorageAccess()` keine vorübergehende Aktivierung und das Versprechen wird automatisch erfüllt werden.

   Die einzige Ausnahme von dem Verhalten "standardmäßig blockiert" ist, wenn eine Einbettung eine navigation von gleicher Herkunft durchführt, um sich nach Erhalt der Erlaubnis oder Aktivierung einer Erlaubnis neu zu laden. In solchen Fällen wird der Speicherzugriff aus der vorherigen Navigation übernommen. Dies ermöglicht der eingebetteten Ressource, sich selbst neu zu laden und Zugriff auf ihre Cookies zu erhalten.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung über `requestStorageAccess()` Zugriff auf Drittanbieter-Cookies erhielt, erhielten alle anderen samesite-Einbettungen automatisch Zugriff. Dies war aus Sicherheitsgründen kein wünschenswertes Verhalten. Wenn `shop.example.com` beispielsweise `locator.users.com` einbettete, um Benutzern zu ermöglichen, ihre Standortinformationen während des Einkaufs zu verwenden und `locator.users.com` `requestStorageAccess()` aufrief, konnte `shop.example.com` und jede andere von ihm eingebettete Seite auf seine Cookies zugreifen und auch auf Cookies von `private.users.com`, die nicht für Einbettungen gedacht sind. [Lesen Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem eine Einbettung die Berechtigung zum Speicherzugriff aktiviert hat, sollte sie sich selbst neu laden. Der Browser wird die Ressource mit einbezogenen Drittanbieter-Cookies erneut anfordern und sie beim Laden der eingebetteten Ressource zur Verfügung stellen. Die richtlinienbezogenen Anfragen der Einbettung folgen der [Samesite-Politik](/de/docs/Web/Security/Defenses/Same-origin_policy), daher werden Drittanbieter-Cookies nur mit Anfragen an die genaue Herkunft der eingebetteten Ressource gesendet. Andere Ursprünge innerhalb derselben Website, die auf Drittanbieter-Cookies zugreifen möchten, müssen die Speicherzugriffs-Berechtigung separat aktivieren.

### Speicherzugriffs-Header

Die API erfordert, dass eine Ressource `requestStorageAccess()` für jeden neuen Kontext aufruft, um sich für die Aktivierung der bereits gewährten Speicherzugriffsberechtigung anzumelden. Dies bedeutet im Gegenzug, dass die eingebettete Ressource zuerst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die Speicherzugriffs-Header ermöglichen einen Workflow, bei dem der Server die Aktivierung der Berechtigung für den Kontext anfordern kann und damit das unnötige zusätzliche Laden der eingebetteten Ressource vermieden wird, wenn die Erlaubnis bereits erteilt wurde. Die Ressource muss jedoch noch geladen werden, um die Erlaubnis beim ersten Mal anzufordern.

Es gibt zwei Header:

- Der Browser fügt der Anfrage den {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Header hinzu, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzuzeigen, z. B. ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde.
- Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}}-Header antworten, um zu verlangen, dass der Browser die Erlaubnis für den Kontext aktiviert und die Anfrage mit Cookies erneut versucht (wobei vermieden wird, die Ressource laden zu müssen, um `requestStorageAccess()` aufzurufen, um dasselbe Ziel zu erreichen), oder die Erlaubnis aktiviert und die zurückgegebene Ressource lädt.

Die Speicherzugriffs-Header können auch verwendet werden, um die Erlaubnis für passive Ressourcen wie Bilder zu aktivieren, sofern der Kontext bereits eine Erlaubnis hat. Dies könnte zum Beispiel verwendet werden, um verschiedene Bilder für verschiedene Benutzer, Zielgruppen oder Orte zu servieren.

Die Workflows werden im Abschnitt [Speicherzugriffs-Header-Sequenzen](#speicherzugriffs-header-sequenzen) gezeigt.

### Anforderungs-/Antwortfluss

#### JavaScript-Sequenzen

Betrachten wir das Beispiel einer in einem {{htmlelement("iframe")}} geladenen Bibliothek, die über mehrere Seiten hinweg geteilt werden muss und auf Anmeldedaten setzt, die in unpartitionierten Cookies gespeichert sind.

Betrachten wir zuerst den Fall, in dem keine Erlaubnis erteilt wurde:

1. Der Browser fordert die Ressource an, ohne Drittanbieter-Cookies einzuschließen.
2. Der Server antwortet mit einer "Rückfall"-Version von Inhalten, die nicht auf Anmeldedaten setzt und die beim Laden keinen Zugriff auf ihre Cookies hat.
   - Sobald die Ressource geladen ist, ruft sie `requestStorageAccess()` mit transienter Aktivierung auf, um die Erlaubnis `storage-access` anzufordern und zu aktivieren.
   - Wenn die Erlaubnis erteilt wird, lädt die Ressource sich selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal unter Einbeziehung von Drittanbieter-Cookies.
4. Die Antwort des Servers enthält eine "anmeldedatenbasierte" Version der Ressource.

Der Browser lädt die Ressource, die Zugriff auf ihre eigenen Cookies hat, weil sie eine aktivierte `storage-access`-Erlaubnis hat.

![Speicher-API-Workflow - ohne Speicherzugriffs-Berechtigung](storage_api_no_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFks1u2zAQhF-F4MkBnEB_lmU1MWC4ufZQo5dGOdDkWiYikSq5StoafveuRCgIHBjVRdrBfrOrIU9cWgW85B5-9WAkfNWidqL9UhlGTyccaqk7YZBtGw0GP-s7cK_ggh56btfrIJbsKX4u2ffB2yNz4G3vJNzv3XpmLJPWvmjwN4ENyC3BwYXgZIR9Z40foaeDaJq9kC-EGqSe54B-swjMEs0m9LHdg2KS2j2NHcfv0DpRw0ZK8H52w940HgdTdML4gWJCon4VqK1haCeMdeBa7T2p14b98FRQagb9h-7BO6zhoLFCeabRQ3Ngs8lZG9n0CvxFEJ9DTK-EuB25kvW0gFYPcZJejTK7jPJ_CYY3C5u_aVUDjpGx3Wbz4S9DaFAZPuc1LcFLdD3MeUsdYij5aZhQcTxCCxUv6VPBQfQNVrwyZ8LoFv20tp1IZ_v6yEs6ak9V3ymB0628UB-VpjN9Fx0YBW5re4O8jFfx6MzLE__NyyRb3aWLokjyPIuyfDHnf6iHxOVimWdFvMyTNCnOc_533CS6W-ZRGhfZooiKKFnFy_M_V38SSw?type=png)](https://mermaid.live/edit#pako:eNqFks1u2zAQhF-F4MkBnEB_lmU1MWC4ufZQo5dGOdDkWiYikSq5StoafveuRCgIHBjVRdrBfrOrIU9cWgW85B5-9WAkfNWidqL9UhlGTyccaqk7YZBtGw0GP-s7cK_ggh56btfrIJbsKX4u2ffB2yNz4G3vJNzv3XpmLJPWvmjwN4ENyC3BwYXgZIR9Z40foaeDaJq9kC-EGqSe54B-swjMEs0m9LHdg2KS2j2NHcfv0DpRw0ZK8H52w940HgdTdML4gWJCon4VqK1haCeMdeBa7T2p14b98FRQagb9h-7BO6zhoLFCeabRQ3Ngs8lZG9n0CvxFEJ9DTK-EuB25kvW0gFYPcZJejTK7jPJ_CYY3C5u_aVUDjpGx3Wbz4S9DaFAZPuc1LcFLdD3MeUsdYij5aZhQcTxCCxUv6VPBQfQNVrwyZ8LoFv20tp1IZ_v6yEs6ak9V3ymB0628UB-VpjN9Fx0YBW5re4O8jFfx6MzLE__NyyRb3aWLokjyPIuyfDHnf6iHxOVimWdFvMyTNCnOc_533CS6W-ZRGhfZooiKKFnFy_M_V38SSw)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: [1]: Request resource<br>(no cookies)
    Server-- >>Client: [2]: Response<br>[fallback content]
    Note over Client: Embed calls requestStorageAccess() with<br>transient activation to request permission
    Note over Client: User grants permission<br>Embed reloads itself (request includes cookies)
    Client->>Server: [3]: Request resource<br>Cookie: userid=123
    Server-- >>Client: [4]: Response<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

Nun betrachten wir den Fall, in dem die Erlaubnis erteilt, aber nicht aktiviert wurde. Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite auf derselben Website einzubetten.

Der Workflow ist fast genau derselbe, da die Ressource trotzdem zuerst ohne Cookies geladen werden muss und anschließend `requestStorageAccess()` aufrufen muss, um die Erlaubnis für den Kontext zu aktivieren. In diesem Fall benötigt sie jedoch keine vorübergehende Aktivierung und kann beim Laden ausgeführt werden.

![Speicher-API-Workflow - Speicherzugriffs-Berechtigung aktivieren](storage_api_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkk1P4zAQhv-K5VORSpWvJqmBSlWX6x7oDcLBtaepRWJn_cHuUvW_M40BrYpYfLE9nued8WsfqDASKKMOfgXQAn4o3lreXzWa4Bi49UqogWtP1p0C7T_HN2CfwcZ4zLlcLmOQkYf0kZG7k7bzxIIzwQq43trlRBsijHlS4C4iG5FLhKMKwtkIu8FoN0IPO951Wy6eENUecx4j-tN4IAZp8o7e9luQRGC6w7Jj-Y03lrewEgKcm1wQbwgXXj1zZAewvXJOGf1_QQud4dIR5R10OzJ5kyZKiy5IcGdX-mxH_oUd65FjJDiwSt6kWf6lKcW5Kd95EWcSO_-tZAseJ78nm9Xqn5tHN6DRdEpbbIIybwNMaY8Z_LSlh1OFhvo99NBQhksJOx4639BGHxHD_3BvTP9OWhPaPWX4aA53YZBo9dv_OoveSoWv8xG0oCXYtQnaU5YW81GZsgP9Q1lWLGb5vK6zsiySosSzv6ecxayaV2VRp1WZ5Vl9nNKXsZNkVpVJntbFvE7qJFuk1fEVT-z9Kg?type=png)](https://mermaid.live/edit#pako:eNqFkk1P4zAQhv-K5VORSpWvJqmBSlWX6x7oDcLBtaepRWJn_cHuUvW_M40BrYpYfLE9nued8WsfqDASKKMOfgXQAn4o3lreXzWa4Bi49UqogWtP1p0C7T_HN2CfwcZ4zLlcLmOQkYf0kZG7k7bzxIIzwQq43trlRBsijHlS4C4iG5FLhKMKwtkIu8FoN0IPO951Wy6eENUecx4j-tN4IAZp8o7e9luQRGC6w7Jj-Y03lrewEgKcm1wQbwgXXj1zZAewvXJOGf1_QQud4dIR5R10OzJ5kyZKiy5IcGdX-mxH_oUd65FjJDiwSt6kWf6lKcW5Kd95EWcSO_-tZAseJ78nm9Xqn5tHN6DRdEpbbIIybwNMaY8Z_LSlh1OFhvo99NBQhksJOx4639BGHxHD_3BvTP9OWhPaPWX4aA53YZBo9dv_OoveSoWv8xG0oCXYtQnaU5YW81GZsgP9Q1lWLGb5vK6zsiySosSzv6ecxayaV2VRp1WZ5Vl9nNKXsZNkVpVJntbFvE7qJFuk1fEVT-z9Kg)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: [1]: Request resource<br>(no cookies)
    Server-- >>Client: [2]: Response<br>[fallback content]
    Note over Client: Embed calls requestStorageAccess() to activate permission
    Note over Client: Embed reloads itself (request includes cookies)
    Client->>Server: [3]: Request resource<br>Cookie: userid=123
    Server-- >>Client: [4]: Response<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

#### Speicherzugriffs-Header-Sequenzen

Die Speicherzugriffs-Header ermöglichen einen verbesserten Workflow, der es dem Server erlaubt, den Browser aufzufordern, eine bereits erteilte Erlaubnis zur Aktivierung zu nutzen und die Anforderung mit einbezogenen Cookies erneut zu versuchen. Dies vermeidet das Erfordernis, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer die Erlaubnis bereits erteilt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus, um die Speicherzugriffs-Berechtigung überhaupt zu gewähren. Die Erlaubnis muss immer von der eingebetteten Ressource durch Aufrufen von `requestStorageAccess()` mit vorübergehender Aktivierung angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Header wird zu Anforderungen hinzugefügt, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzugeben, etwa ob die Erlaubnis aktiviert, erteilt oder nicht erteilt wurde. Abhängig vom Speicherzugriffsstatus der Anforderung kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}}-Header antworten, um den Browser aufzufordern, die Erlaubnis für den Kontext zu aktivieren und die Anforderung mit Cookies erneut zu versuchen.

Schauen wir uns zunächst den Fall an, in dem versucht wird, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits eine erteilte Erlaubnis hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Erlaubnis erteilt, aber für den Kontext inaktiv ist.
   - Die Anforderung wird auch den {{httpheader("Origin")}}-Header enthalten, um dem Server zu helfen, zu entscheiden, ob er die Berechtigung aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Erlaubnis aktivieren und die Anfrage mit Cookies erneut versuchen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}}-Header enthalten, da sie vom Wert `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage erneut versucht, fügt er `Sec-Fetch-Storage-Access: active` neben den Cookies hinzu.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf die Drittanbieter-Cookies zu laden.

![Speicherzugriffs-Header-Workflow - Speicherzugriffs-Berechtigung aktivieren und erneut versuchen](storage_headers_activate_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA?type=png)](https://mermaid.live/edit#pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: [1]: Sec-Fetch-Storage-Access: inactive<br>Origin: <origin><br>(no cookies)
    Server-- >>Client: [2]: Activate-Storage-Access: retry<br>Vary: Sec-Fetch-Storage-Access
    Note over Client: Client activates storage-access permission<br>and retries request (with cookies)
    Client->>Server: [3]: Sec-Fetch-Storage-Access: active<br>Origin: <origin><br>Cookie: userid=123
    Server-- >>Client: [4]: Activate-Storage-Access: load<br>Vary: Sec-Fetch-Storage-Access<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

Der letzte Zustand, der zu berücksichtigen ist, ist das Laden einer eingebetteten Ressource, für die die Erlaubnis nicht erteilt wurde:

> [!NOTE]
> Da wir die Header nicht verwenden können, um die Erlaubnis zu erteilen, müssen wir die Ressource ohne Cookies laden, damit sie die Erlaubnis anfordern kann. Dies ist dieselbe Sequenz, als ob die Header nicht angewendet werden würden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Erlaubnis nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die beim Laden die Erlaubnis für sicheren Zugriff mit vorübergehender Aktivierung anfordert. Der `Activate-Storage-Access`-Header ist nicht in der Antwort enthalten, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Erlaubnis erteilt (und dadurch aktiviert) hat, lädt die Einbettung sich selbst neu.

3. Der Browser fügt der Anfrage `Sec-Fetch-Storage-Access: active` hinzu, um anzuzeigen, dass der Kontext eine aktivierte `storage-access`-Erlaubnis hat, und schließt die Drittanbieter-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf die Drittanbieter-Cookies zu laden.

![Speicherzugriffs-Header-Workflow - ohne Speicherzugriffs-Berechtigung](storage_headers_no_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqNk01v2zAMhv-KoFMKxEH8EcfWugBB1h23Q7AdVvegyIwj1JYySW7XBfnvpaxkKBpkmy82X5APyVfygQpdA2XUws8elIBPkjeGdx8qRfDZc-OkkHuuHFm1EpS71NdgnsAEPeREi0UQGbmPHxhmiOgzOLGL1k4b3kC0FAKsZURpBbcbs_hqZCMVI7d6-Fh4baQ0EVo_SrA3gR6gEeJDH8QniP_Ozcv1Jh51v-Vtu-HiEYHKYeVDAH7RDohGJjkD77oN1ERguiXGW2LdCRdooxvyLN3OQ53hyvoqwoWTT9xJrYjT5zKyB9NJa1GdXOv2zWKAditn36R7eJjDQKt5bYl0FtotGZ3RUom2r8G-8-fS_fSv7g9zX_V_NbAZ6XFIWX-Mk_TqKWTYZhlMgIsufgXP-49j-tfphDcJpjzLugE3HAdZL5dvDDwtVik6pg3OTpkzPYxphxnch_TgO1TU7aCDijL8rGHL-9ZVtFJHLMOb_UPr7lxpdN_sKMNrZDHq9zUuevpT3ql3tcS9_ogGVA1mpXvlKEuSZCBTdqC_MMzKSToriiTPs2mWz8b0hbIYxflsnmdFPM-TNCmOY_p7mGQ6mefTNC6yWVmWSZklx1dtqUSP?type=png)](https://mermaid.live/edit#pako:eNqNk01v2zAMhv-KoFMKxEH8EcfWugBB1h23Q7AdVvegyIwj1JYySW7XBfnvpaxkKBpkmy82X5APyVfygQpdA2XUws8elIBPkjeGdx8qRfDZc-OkkHuuHFm1EpS71NdgnsAEPeREi0UQGbmPHxhmiOgzOLGL1k4b3kC0FAKsZURpBbcbs_hqZCMVI7d6-Fh4baQ0EVo_SrA3gR6gEeJDH8QniP_Ozcv1Jh51v-Vtu-HiEYHKYeVDAH7RDohGJjkD77oN1ERguiXGW2LdCRdooxvyLN3OQ53hyvoqwoWTT9xJrYjT5zKyB9NJa1GdXOv2zWKAditn36R7eJjDQKt5bYl0FtotGZ3RUom2r8G-8-fS_fSv7g9zX_V_NbAZ6XFIWX-Mk_TqKWTYZhlMgIsufgXP-49j-tfphDcJpjzLugE3HAdZL5dvDDwtVik6pg3OTpkzPYxphxnch_TgO1TU7aCDijL8rGHL-9ZVtFJHLMOb_UPr7lxpdN_sKMNrZDHq9zUuevpT3ql3tcS9_ogGVA1mpXvlKEuSZCBTdqC_MMzKSToriiTPs2mWz8b0hbIYxflsnmdFPM-TNCmOY_p7mGQ6mefTNC6yWVmWSZklx1dtqUSP)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: [1]: Sec-Fetch-Storage-Access: none<br>Origin: <origin><br>(no cookies)
    Server-- >>Client: [2]: Vary: Sec-Fetch-Storage-Access<br>[fallback content]
    Note over Client: Embed calls requestStorageAccess() with<br>transient activation to request permission.
    Note over Client: User grants permission<br>Embed reloads itself (request includes cookies)
    Client->>Server: [3]: Sec-Fetch-Storage-Access: active<br>Origin: <origin><br>Cookie: userid=123
    Server-- >>Client: [4]: Activate-Storage-Access: load<br>Vary: Sec-Fetch-Storage-Access<br>[content]
    Note over Client: Client loads widget with SAA permission active
-->

## Sicherheitsüberlegungen

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die nachstehende Liste, wenn Sie Probleme haben, eine Anfrage zum Laufen zu bringen:

1. Der Erlaubnisantrag muss mit einem Nutzerzustimmungs({{Glossary("transient_activation", "transient activation")}}) wie einem Tipp oder Klick verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanforderungen überfluten. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Erlaubnis zur Nutzung der API bereits für einen anderen Kontext mit demselben `<top-level site, embedded site>`-Schlüssel erteilt wurde.
   - Der Anrufer ein oberstes Dokument oder eine gleichartige Seite des obersten Dokuments ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das oberste Dokument dürfen keinen `null`-Ursprung haben.
3. Ursprünge, die nie als Erstanbieter in Interaktion getreten sind, haben keine Vorstellung von Erstanbieter-Speicherplatz. Aus Sicht des Benutzers haben sie nur eine Drittanbieterbeziehung zu diesem Ursprung. Zugriffsanforderungen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer in letzter Zeit nicht mit dem eingebetteten Inhalt in einem Erstanbieter-Kontext interagiert hat (in Firefox bedeutet "in letzter Zeit" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Die API stellt den [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) zur Verfügung, um dies zu behandeln. Das `<iframe>` muss dies enthalten, um Speicherzugriffsanforderungen zu aktivieren, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, um die API aufzurufen und sie in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Nutzung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf Ihrem Server gesetzt ist, blockiert werden.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Whitelists, Blacklists, geräteinterne Klassifikationen, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Anfordern einer ausdrücklichen Benutzererlaubnis.

## Browser-spezifische Varianten

Obwohl die API-Oberfläche dieselbe ist, sollten Websites, die die Speicherzugriffs-API verwenden, Unterschiede im Ausmaß und Umfang des Zugriffs auf Drittanbieter-Cookies erwarten, den sie in verschiedenen Browsern erhalten, aufgrund ihrer unterschiedlichen Speicherzugriffsrichtlinien.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das Attribut [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) gesetzt haben.
- Die Berechtigungsfreigaben für den Speicherzugriff laufen nach 30 Tagen Browsernutzung aus, wenn keine Nutzerinteraktion stattgefunden hat. Die Interaktion mit dem eingebetteten Inhalt verlängert dieses Limit um weitere 30 Tage. Dies geschieht nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Benutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den obersten Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut einbettet, wird der eingebettete Ursprung sofort Drittanbieter-Cookie-Zugriff beim Laden haben, sofern das innerhalb von 30 Tagen geschieht.
- Die Zugriffsberechtigungen laufen nach 30 Kalendertagen aus.

Die Dokumentation zu Firefox' neuer Speicherzugriffsrichtlinie für das Blockieren von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Berechtigungsumfangs.

### Safari

- Die Speicherzugriffsberechtigungen laufen nach 30 Tagen Browserverwendung aus, wenn keine Nutzerinteraktion stattgefunden hat. Ein erfolgreicher Einsatz der Speicherzugriffs-API setzt diesen Zähler zurück.
- Nachdem eine Einbettung die Speicherzugriffs-Berechtigung aktiviert hat und ihr Inhalt erneut angefordert wurde, werden Drittanbieter-Cookies mit Anfragen an die _Website_ der eingebetteten Ressource gesendet, anstelle des Ursprungs. Safari verwendet immer noch ein älteres Design, das nicht der Ursprungsstrategie folgt.

## Beispiele

- Siehe [Verwendung der Speicherzugriffs-API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es Inhalten, die in einem Drittanbieter-Kontext geladen werden (z. B. in einem {{htmlelement("iframe")}} eingebettet), Zugriff auf Drittanbieter-Cookies und unpartitionierte Zustände anzufordern; gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{deprecated_inline}}
  - : Eine nicht standardisierte veraltete Erweiterung der Speicherzugriffs-API, die es obersten Websites ermöglicht, Drittanbieter-Cookie-Zugriff im Namen eingebetteter Inhalte zu beantragen, die von einer anderen Website im selben [related website set](https://privacysandbox.google.com/cookies/related-website-sets-integration) stammen. Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen propagieren sich zum Versprechen, das von diesen Methoden zurückgegeben wird, was den Anrufern ermöglicht, Maßnahmen zu ergreifen, die Benutzerinteraktionen erfordern, ohne einen zweiten Klick zu erfordern. Beispielsweise könnte ein Anrufer ein Pop-up-Fenster aus dem aufgelösten Versprechen heraus öffnen, ohne Firefox' Pop-up-Blocker auszulösen.

### Ergänzungen für andere APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"`-Feature-Name
  - : In unterstützenden Browsern kann dies abfragen, ob der Zugriff auf Drittanbieter-Cookies im Allgemeinen gewährt wurde, das heißt zu einem anderen samesite-Einbettung. Wenn ja, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen und das Versprechen wird automatisch erfüllt.
- `Permissions.query()`, der `"top-level-storage-access"`-Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name, der verwendet wird, um abzufragen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Wenn ja, benötigen Sie `requestStorageAccessFor()` nicht erneut aufzurufen.

### Ergänzungen zu HTTP

#### Erlaubnisrichtlinie

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access`-Richtlinienrichtlinie steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (z. B. eingebettet in einem {{htmlelement("iframe")}}) die Speicherzugriffs-API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Speicherzugriffs-Header

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffsstatus" für den aktuellen Anforderungskontext an, der einer von `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine vorhandene Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann oder eine Ressource mit Cookie-Zugriff laden kann, wenn er bereits eine aktivierte Erlaubnis hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Speicherzugriffs-API](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung in die Speicherzugriffs-API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
