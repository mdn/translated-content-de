---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: 2290fdbf9d5cf68482245d07d388b883156058ac
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für domänenübergreifende Inhalte, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Status](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf die es normalerweise nur in einem Erstanbieter-Kontext zugreifen könnte (d.h. wenn es direkt in einem Browser-Tab geladen wird).

Die Storage Access API ist für Benutzeragenten relevant, die standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Status blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern). Es gibt legitime Verwendungen für Drittanbieter-Cookies und unpartitionierten Status, die wir trotz dieser Standardeinschränkungen weiterhin ermöglichen möchten. Beispiele hierfür sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Benutzerdetails wie Standortdaten oder Anzeigevorlieben über verschiedene Websites hinweg.

Die API bietet Methoden, mit denen eingebettete Ressourcen überprüfen können, ob sie derzeit Zugriff auf Drittanbieter-Cookies haben, und falls nicht, Zugang vom Benutzeragenten anfordern können.

## Konzepte und Verwendung

Browser implementieren mehrere Speicherzugriffsfunktionen und -richtlinien, die den Zugriff auf Drittanbieter-Cookies und unpartitionierten Status einschränken. Diese reichen von der Bereitstellung eines einzigartigen Speicherbereichs für Cookies ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) für eingebettete Ressourcen unter jedem obersten Ursprung bis hin zum vollständigen Blockieren des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik der Funktionen und Richtlinien zur Blockierung von Drittanbieter-Cookies und unpartitioniertem Status unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Im Drittanbieter-Kontext eingebettete domänenübergreifende Ressourcen erhalten keinen Zugriff auf den gleichen Status, auf den sie im Erstanbieter-Kontext zugreifen könnten. Dies geschieht mit guter Absicht — Browserhersteller möchten Schritte unternehmen, um die Privatsphäre und Sicherheit ihrer Nutzer besser zu schützen. Beispiele hierfür sind, sie weniger anfällig für das Verfolgen ihrer Aktivitäten über verschiedene Websites hinweg zu machen, und sie weniger anfällig für Exploits wie Cross-Site Request Forgery ({{Glossary("CSRF", "CSRF")}}) zu machen.

Es gibt jedoch legitime Verwendungen für eingebettete domänenübergreifende Inhalte, die auf Drittanbieter-Cookies und unpartitionierten Status zugreifen, die durch die oben genannten Funktionen und Richtlinien beeinträchtigt werden. Nehmen wir an, Sie betreiben eine Reihe unterschiedlicher Websites, die Zugriff auf verschiedene Produkte bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienste in unterschiedliche Länderdomains für Lokalisierungszwecke trennen — `example.com`, `example.ua`, `example.br` usw. — oder auf eine andere Weise.

Vielleicht haben Sie begleitende Utility-Websites mit Komponenten, die in alle anderen Websites eingebettet sind, beispielsweise um SSO (`sso-example.com`) oder generalisierte Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Utility-Websites möchten ihren Status mithilfe von Cookies mit den Websites teilen, in denen sie eingebettet sind. Sie können keine Erstanbieter-Cookies teilen, weil sie auf unterschiedlichen Domains liegen, und Drittanbieter-Cookies funktionieren in Browsern, die sie blockieren, nicht mehr.

In solchen Situationen ermutigen Website-Betreiber oft die Benutzer, ihre Website als Ausnahme hinzuzufügen oder Drittanbieter-Cookie-Blockierungsrichtlinien vollständig zu deaktivieren. Benutzer, die weiterhin mit ihrem Inhalt interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen aus allen eingebetteten Ursprüngen und möglicherweise über alle Websites hinweg erheblich lockern.

Die Storage Access API ist vorgesehen, um dieses Problem zu lösen; eingebettete domänenübergreifende Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) uneingeschränkten Zugriff auf Drittanbieter-Cookies und unpartitionierten Status frameweise anfordern. Sie kann auch mittels der Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) überprüfen, ob sie bereits Zugriff hat.

> [!NOTE]
> Die [Storage Access Headers](#storage_access_headers) sind eine HTTP-Erweiterung der API, die einen effizienteren Speicher-API-Workflow ermöglicht und auch verwendet werden kann, um eine zuvor gewährte Speicherzugriffsberechtigung für passive Ressourcen, wie Bilder, zu aktivieren.

### Unpartitionierte versus partitionierte Cookies

Die Storage Access API wird nur benötigt, um Zugriff auf _unpartitionierte_ Drittanbieter-Cookies zu gewähren! Unpartitionierte Cookies sind solche, bei denen alle auf derselben Seite gesetzten Cookies im selben Cookie-Container gespeichert sind — die traditionelle Methode seit den Anfängen des Webs. Da die Gefahr besteht, Daten, die für eine Website bestimmt sind, für andere freizulegen, blockieren Browser häufig das Senden von unpartitionierten Drittanbieter-Cookies in Anfragen und erlauben keinen Zugriff auf sie in eingebetteten Kontexte.

Dies steht im Gegensatz zu _partitionierten_ Cookies, bei denen eingebetteten Ressourcen unter jeder obersten Website ein einzigartiger Cookie-Speicherplatz zugewiesen wird, der von denen anderer Websites isoliert ist. Da kein Risiko für die Privatsphäre besteht, weil es nicht möglich ist, Benutzer über Websites hinweg über partitionierte Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und machen sie eingebetteten Ressourcen verfügbar. Beachten Sie jedoch, dass, da die Cookies nicht zwischen den Websites geteilt werden, sie auch nicht automatisch über Websites hinweg synchronisiert werden. Browser haben verschiedene Mechanismen, um den Zugriff auf Drittanbieter-Cookies zu partitionieren, beispielsweise [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

Wenn wir im Kontext der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit _unpartitionierte_ Drittanbieter-Cookies.

### Funktionsweise

Drittanbieter-Inhalte, die in einem {{htmlelement("iframe")}} eingebettet sind und auf Cookies oder anderen unpartitionierten Status zugreifen müssen, können den Zugriff mit der Storage Access API wie folgt anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob die eingebetteten Inhalte bereits Zugriff auf unpartitionierte Cookies haben.
2. Wenn nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die Berechtigung `storage-access` anzufordern.

   Je nach Browser wird der Benutzer auf leicht unterschiedliche Weise gefragt, ob er die Berechtigung für die anfragende Einbettung erteilen möchte.
   - Safari zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die vorher keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem ein Ursprung auf mehr als einer Mindestanzahl von Websites Speicherzugriff angefordert hat.
   - Chrome zeigt Eingabeaufforderungen für alle eingebetteten Inhalte an, die vorher keinen Speicherzugriff erhalten haben. Es wird jedoch automatisch Zugriff gewährt und Eingabeaufforderungen übersprungen, wenn die eingebetteten Inhalte und die einbettende Seite Teil derselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sind.

3. Die Berechtigung wird basierend darauf gewährt oder abgelehnt, ob der Inhalt alle Sicherheitsanforderungen erfüllt – siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für allgemeine Anforderungen und [Browserspezifische Variationen](#browserspezifische_variationen) für einige browserspezifische Sicherheitsanforderungen. Die versprochene Natur von `requestStorageAccess()` ermöglicht es Ihnen, Code auszuführen, um Erfolgs- und Fehlerfälle zu behandeln.

   Sobald die Berechtigung erteilt wurde, wird ein Berechtigungsschlüssel mit der Struktur `<oberste Website, eingebettete Website>` im Browser gespeichert. Wenn die einbettende Website beispielsweise `embedder.com` ist und die Einbettung `locator.example.com`, wäre der Schlüssel `<embedder.com, example.com>`.

   Dies bedeutet, dass die Berechtigung für den Zugriff auf unpartitionierte Cookies für jede Seite auf der `example.com`-Site oder einen ihrer Subdomains erteilt wird, die in einer Seite auf der `embedder.com`-Site eingebettet ist. `docs.example.com`, `profile.example.com` können jetzt beispielsweise `requestStorageAccess()` aufrufen, und das Versprechen würde automatisch erfüllt.

   > [!NOTE]
   > Ältere Spezifikationsversionen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<oberste Website, eingebetteter Ursprung>`, was bedeutete, dass dieselbe Site, cross-origin Einbettungen nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Berechtigung muss explizit für jeden _Kontext_ aktiviert werden.

   Wenn eine Einbettung eine Berechtigung erhält, wird diese Berechtigung auch für den aktuellen Kontext aktiviert. Andere Kontexte, wie andere Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}} Elementen auf der Seite, haben jedoch ihren Drittanbieter-Cookie-Zugriff standardmäßig blockiert. Das bedeutet, dass auch wenn eine Berechtigung erteilt wird, die Seite geladen und `requestStorageAccess()` aufgerufen werden muss, um die Berechtigung zu aktivieren. Wenn die Berechtigung bereits gewährt wurde, benötigt ein Aufruf von `requestStorageAccess()` keine transient activation und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme vom "standardmäßig blockierten" Verhalten ist, wenn eine Einbettung eine gleichursprüngige Navigation durchführt, um sich nach der Gewährung oder Aktivierung einer Berechtigung neu zu laden. In solchen Fällen wird der Speicherzugriff aus der vorherigen Navigation übernommen. Dies ermöglicht es der eingebetteten Ressource, sich neu zu laden und Zugriff auf ihre Cookies zu erhalten.

   > [!NOTE]
   > In älteren Spezifikationsversionen war der Zugriff _pro Seite_ (Safari ist der einzige Browser, der dieses Modell noch verwendet). Wenn eine Einbettung über `requestStorageAccess()` Drittanbieter-Cookie-Zugriff erhielt, erhielten alle anderen Einbettungen derselben Site automatisch Zugriff. Dies war aus Sicherheitsgründen kein wünschenswertes Verhalten — zum Beispiel, wenn `shop.example.com` `locator.users.com` einbettet, um Benutzern zu ermöglichen, ihre Standortinformationen beim Einkaufen zu verwenden, und `locator.users.com` `requestStorageAccess()` aufruft, könnten `shop.example.com` und alle anderen eingebetteten Websites auf dessen Cookies zugreifen, aber auch auf Cookies von `private.users.com`, welche nicht eingebettet werden sollten. [Erfahren Sie mehr über die Beweggründe](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem eine Einbettung die Speicherzugriffsberechtigung aktiviert hat, sollte sie sich neu laden. Der Browser fordert die Ressource erneut an, diesmal mit beinhalteten Drittanbieter-Cookies, und stellt sie der eingebetteten Ressource zur Verfügung, sobald sie geladen ist.

### Storage access headers

Die API erfordert, dass eine Ressource `requestStorageAccess()` für jeden neuen Kontext aufrufen muss, um sich zur Aktivierung der Speicherzugriffsberechtigung anzumelden, die bereits gewährt worden sein muss. Das bedeutet wiederum, dass die eingebettete Ressource zuerst ohne Cookies und geladen angefordert werden muss, damit sie die Methode aufrufen kann.

Die storage access headers ermöglichen einen Workflow, bei dem der Server anfordern kann, dass die Berechtigung für den Kontext aktiviert wird. Auf diese Weise kann eine unnötige zusätzliche Last der eingebetteten Ressource vermieden werden, wenn die Berechtigung bereits gewährt wurde. Die Ressource muss dennoch geladen werden, um die Berechtigung erstmals anzufordern.

Es gibt zwei Header:

- Der Browser fügt der Anfrage den Header {{HTTPHeader("Sec-Fetch-Storage-Access")}} hinzu, um den Speicherzugriffsstatus des aktuellen Anforderungs-Kontexts anzuzeigen, z.B., ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
- Je nach Speicherzugriffsstatus der Anfrage kann der Server mit einem Header {{HTTPHeader("Activate-Storage-Access")}} antworten, um zu verlangen, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies wiederholt (um zu vermeiden, dass die Ressource geladen werden muss, um `requestStorageAccess()` aufzurufen, um denselben Effekt zu erzielen) oder die Berechtigung aktiviert und die zurückgegebene Ressource lädt.

Die storage access headers können auch verwendet werden, um die Berechtigung für passive Ressourcen zu aktivieren, z.B. Bilder, vorausgesetzt der Kontext hat bereits die Berechtigung erhalten. Dies könnte zum Beispiel verwendet werden, um verschiedene Bilder für verschiedene Benutzer, Zielgruppen oder Regionen anzubieten.

Die Workflows sind im Abschnitt [Storage access header sequences](#storage_access_header-abfolgen) dargestellt.

### Anfrage-/Antwortfluss

#### JavaScript-Abfolgen

Betrachten Sie das Beispiel einer in einem {{htmlelement("iframe")}} geladenen Bibliothek, die über eine Reihe von Websites hinweg geteilt werden muss und auf in unpartitionierten Cookies gespeicherte Anmeldeinformationen angewiesen ist.

Zunächst betrachten wir den Fall, in dem die Berechtigung nicht gewährt wurde:

1. Der Browser fordert die Ressource an, ohne Drittanbieter-Cookies einzuschließen.
2. Der Server antwortet mit einer "Fallback"-Version von Inhalten, die nicht auf Anmeldeinformationen angewiesen ist und die beim Laden keinen Zugriff auf ihre Cookies hat.
   - Nach dem Laden ruft die Ressource `requestStorageAccess()` mit transient activation auf, um die Berechtigung für den `storage-access` anzufordern und zu aktivieren.
   - Wenn die Berechtigung gewährt wird, lädt die Ressource sich selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal einschließlich der Drittanbieter-Cookies.
4. Die Serverantwort enthält eine "mit Anmeldeinformationen ausgestattete" Version der Ressource.

Der Browser lädt die Ressource, die Zugriff auf ihre eigenen Cookies hat, da sie eine aktivierte `storage-access`-Berechtigung besitzt.

![Storage API Workflow - ohne Speicherzugriffsberechtigung](storage_api_no_permission.png)

<!--
[![Bild: Storage API Workflow - ohne Speicherzugriffsberechtigung](https://mermaid.ink/img/pako:eNqFks1u2zAQhF-F4MkBnEB_lmU1MWC4ufZQo5dGOdDkWiYikSq5StoafveuRCgIHBjVRdrBfrOrIU9cWgW85B5-9WAkfNWidqL9UhlGTyccaqk7YZBtGw0GP-s7cK_ggh56btfrIJbsKX4u2ffB2yNz4G3vJNzv3XpmLJPWvmjwN4ENyC3BwYXgZIR9Z40foaeDaJq9kC-EGqSe54B-swjMEs0m9LHdg2KS2j2NHcfv0DpRw0ZK8H52w940HgdTdML4gWJCon4VqK1haCeMdeBa7T2p14b98FRQagb9h-7BO6zhoLFCeabRQ3Ngs8lZG9n0CvxFEJ9DTK-EuB25kvW0gFYPcZJejTK7jPJ_CYY3C5u_aVUDjpGx3Wbz4S9DaFAZPuc1LcFLdD3MeUsdYij5aZhQcTxCCxUv6VPBQfQNVrwyZ8LoFv20tp1IZ_v6yEs6ak9V3ymB0628UB-VpjN9Fx0YBW5re4O8jFfx6MzLE__NyyRb3aWLokjyPIuyfDHnf6iHxOVimWdFvMyTNCnOc_533CS6W-ZRGhfZooiKKFnFy_M_V38SSw?type=png)](https://mermaid.live/edit#pako:eNqFks1u2zAQhF-F4MkBnEB_lmU1MWC4ufZQo5dGOdDkWiYikSq5StoafveuRCgIHBjVRdrBfrOrIU9cWgW85B5-9WAkfNWidqL9UhlGTyccaqk7YZBtGw0GP-s7cK_ggh56btfrIJbsKX4u2ffB2yNz4G3vJNzv3XpmLJPWvmjwN4ENyC3BwYXgZIR9Z40foaeDaJq9kC-EGqSe54B-swjMEs0m9LHdg2KS2j2NHcfv0DpRw0ZK8H52w940HgdTdML4gWJCon4VqK1haCeMdeBa7T2p14b98FRQagb9h-7BO6zhoLFCeabRQ3Ngs8lZG9n0CvxFEJ9DTK-EuB25kvW0gFYPcZJejTK7jPJ_CYY3C5u_aVUDjpGx3Wbz4S9DaFAZPuc1LcFLdD3MeUsdYij5aZhQcTxCCxUv6VPBQfQNVrwyZ8LoFv20tp1IZ_v6yEs6ak9V3ymB0628UB-VpjN9Fx0YBW5re4O8jFfx6MzLE__NyyRb3aWLokjyPIuyfDHnf6iHxOVimWdFvMyTNCnOc_533CS6W-ZRGhfZooiKKFnFy_M_V38SSw)

sequenceDiagram;
    Teilnehmer Client
    Teilnehmer Server
    Client->>Server: [1]: Anfrage Ressource<br>(ohne Cookies)
    Server-- >>Client: [2]: Antwort<br>[Fallback-Inhalt]
    Hinweis über Client: Einbettung ruft requestStorageAccess() mit<br>transient activation auf, um Berechtigung anzufordern
    Hinweis über Client: Benutzer erteilt Berechtigung<br>Einbettung lädt sich neu (Anfrage enthält Cookies)
    Client->>Server: [3]: Anfrage Ressource<br>Cookie: userid=123
    Server-- >>Client: [4]: Antwort<br>[Inhalt]
    Hinweis über Client: Client lädt Widget mit aktiver SAA-Berechtigung
-->

Nun betrachten wir den Fall, dass die Berechtigung gewährt, aber nicht aktiviert wurde. Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite derselben Website einzubetten.

Der Workflow ist fast identisch, da die Ressource immer noch zuerst ohne Cookies geladen werden muss und dann `requestStorageAccess()` aufrufen muss, um die Berechtigung für den Kontext zu aktivieren. In diesem Fall benötigt es jedoch keine transient activation und kann beim Laden ausgeführt werden.

![Storage API Workflow - Speicherzugriffsberechtigung aktivieren](storage_api_permission.png)

<!--
[![Bild: Storage API Workflow - Speicherzugriffsberechtigung aktivieren](https://mermaid.ink/img/pako:eNqFkk1P4zAQhv-K5VORSpWvJqmBSlWX6x7oDcLBtaepRWJn_cHuUvW_M40BrYpYfLE9nued8WsfqDASKKMOfgXQAn4o3lreXzWa4Bi49UqogWtP1p0C7T_HN2CfwcZ4zLlcLmOQkYf0kZG7k7bzxIIzwQq43trlRBsijHlS4C4iG5FLhKMKwtkIu8FoN0IPO951Wy6eENUecx4j-tN4IAZp8o7e9luQRGC6w7Jj-Y03lrewEgKcm1wQbwgXXj1zZAewvXJOGf1_QQud4dIR5R10OzJ5kyZKiy5IcGdX-mxH_oUd65FjJDiwSt6kWf6lKcW5Kd95EWcSO_-tZAseJ78nm9Xqn5tHN6DRdEpbbIIybwNMaY8Z_LSlh1OFhvo99NBQhksJOx4639BGHxHD_3BvTP9OWhPaPWX4aA53YZBo9dv_OoveSoWv8xG0oCXYtQnaU5YW81GZsgP9Q1lWLGb5vK6zsiySosSzv6ecxayaV2VRp1WZ5Vl9nNKXsZNkVpVJntbFvE7qJFuk1fEVT-z9Kg?type=png)](https://mermaid.live/edit#pako:eNqFkk1P4zAQhv-K5VORSpWvJqmBSlWX6x7oDcLBtaepRWJn_cHuUvW_M40BrYpYfLE9nued8WsfqDASKKMOfgXQAn4o3lreXzWa4Bi49UqogWtP1p0C7T_HN2CfwcZ4zLlcLmOQkYf0kZG7k7bzxIIzwQq43trlRBsijHlS4C4iG5FLhKMKwtkIu8FoN0IPO951Wy6eENUecx4j-tN4IAZp8o7e9luQRGC6w7Jj-Y03lrewEgKcm1wQbwgXXj1zZAewvXJOGf1_QQud4dIR5R10OzJ5kyZKiy5IcGdX-mxH_oUd65FjJDiwSt6kWf6lKcW5Kd95EWcSO_-tZAseJ78nm9Xqn5tHN6DRdEpbbIIybwNMaY8Z_LSlh1OFhvo99NBQhksJOx4639BGHxHD_3BvTP9OWhPaPWX4aA53YZBo9dv_OoveSoWv8xG0oCXYtQnaU5YW81GZsgP9Q1lWLGb5vK6zsiySosSzv6ecxayaV2VRp1WZ5Vl9nNKXsZNkVpVJntbFvE7qJFuk1fEVT-z9Kg)

sequenceDiagram;
    Teilnehmer Client
    Teilnehmer Server
    Client->>Server: [1]: Anfrage Ressource<br>(ohne Cookies)
    Server-- >>Client: [2]: Antwort<br>[Fallback-Inhalt]
    Hinweis über Client: Einbettung ruft requestStorageAccess() auf, um Berechtigung zu aktivieren
    Hinweis über Client: Einbettung lädt sich neu (Anfrage enthält Cookies)
    Client->>Server: [3]: Anfrage Ressource<br>Cookie: userid=123
    Server-- >>Client: [4]: Antwort<br>[Inhalt]
    Hinweis über Client: Client lädt Widget mit aktiver SAA-Berechtigung
-->

#### Storage access header-Abfolgen

Die storage access headers ermöglichen einen verbesserten Workflow, bei dem der Server anfordern kann, dass der Browser eine bereits gewährte Berechtigung aktiviert und die Anfrage mit enthaltenen Cookies wiederholt. Dies vermeidet die Anforderung, die Ressource zu laden, um `requestStorageAccess()` aufzurufen, wenn der Benutzer bereits die Berechtigung erteilt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus, um die Speicherzugriffsberechtigung erstmals zu erteilen. Die Berechtigung muss immer von der eingebetteten Ressource durch Aufruf von `requestStorageAccess()` mit transient activation angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}}-Header wird Anfragen hinzugefügt, um den Speicherzugriffsstatus des aktuellen Anforderungs-Kontexts anzuzeigen, wie z.B., ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde. Je nach Speicherzugriffsstatus der Anfrage kann der Server mit dem Header {{HTTPHeader("Activate-Storage-Access")}} antworten, um zu verlangen, dass der Browser die Berechtigung für den Kontext aktiviert und die Anfrage mit Cookies wiederholt.

Schauen wir uns zunächst den Fall an, in dem versucht wird, eine eingebettete Ressource für einen neuen Kontext zu laden, der bereits die Berechtigung erhalten hat:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzuzeigen, dass die Berechtigung für den Kontext gewährt, aber inaktiv ist.
   - Die Anfrage enthält auch den {{httpheader("Origin")}}-Header, um dem Server zu helfen zu entscheiden, ob er die Berechtigung aktivieren möchte.
2. Der Server kann dann mit `Activate-Storage-Access: retry` antworten, um anzuzeigen, dass der Browser die Berechtigung aktivieren und die Anfrage mit Cookies wiederholen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} enthalten, da sie vom Wert `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass die Antwort keinen Inhalt enthält.
3. Wenn der Browser die Anfrage wiederholt, fügt er `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, zusammen mit den Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

![Storage access header Workflow - Speicherzugriffsberechtigung aktivieren und wiederholen](storage_headers_activate_permission.png)

<!--
[![Bild: Storage access header Workflow - Speicherzugriffsberechtigung aktivieren und wiederholen](https://mermaid.ink/img/pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA?type=png)](https://mermaid.live/edit#pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA)

sequenceDiagram;
    Teilnehmer Client
    Teilnehmer Server
    Client->>Server: [1]: Sec-Fetch-Storage-Access: inactive<br>Origin: <origin><br>(ohne Cookies)
    Server-- >>Client: [2]: Activate-Storage-Access: retry<br>Vary: Sec-Fetch-Storage-Access
    Hinweis über Client: Client aktiviert Speicherzugriffsberechtigung<br>und wiederholt Anfrage (mit Cookies)
    Client->>Server: [3]: Sec-Fetch-Storage-Access: active<br>Origin: <origin><br>Cookie: userid=123
    Server-- >>Client: [4]: Activate-Storage-Access: load<br>Vary: Sec-Fetch-Storage-Access<br>[Inhalt]
    Hinweis über Client: Client lädt Widget mit aktiver SAA-Berechtigung
-->

Der letzte zu berücksichtigende Zustand ist, wenn eine eingebettete Ressource geladen wird, für die die Berechtigung nicht gewährt wurde:

> [!NOTE]
> Da die Header nicht zum Gewähren von Berechtigungen verwendet werden können, müssen wir die Ressource ohne Cookies laden, damit sie die Berechtigung anfragen kann. Dies ist die gleiche Abfolge, als ob die Header nicht angewendet würden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzuzeigen, dass die Berechtigung nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die beim Laden die Berechtigung für den sicheren Zugriff mit transient activation anfordert. Der `Activate-Storage-Access`-Header wird in die Antwort nicht aufgenommen, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Benutzer die Berechtigung erteilt (und damit aktiviert) hat, lädt sich die Einbettung neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzuzeigen, dass der Kontext eine aktivierte Speicherzugriffsberechtigung hat, und schließt die Drittanbieter-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, was dem Browser mitteilt, die neue Version der Bibliothek mit Zugriff auf Drittanbieter-Cookies zu laden.

![Storage access header Workflow - ohne Speicherzugriffsberechtigung](storage_headers_no_permission.png)

<!--
[![Bild: Storage access header Workflow - ohne Speicherzugriffsberechtigung](https://mermaid.ink/img/pako:eNqNk01v2zAMhv-KoFMKxEH8EcfWugBB1h23Q7AdVvegyIwj1JYySW7XBfnvpaxkKBpkmy82X5APyVfygQpdA2XUws8elIBPkjeGdx8qRfDZc-OkkHuuHFm1EpS71NdgnsAEPeREi0UQGbmPHxhmiOgzOLGL1k4b3kC0FAKsZURpBbcbs_hqZCMVI7d6-Fh4baQ0EVo_SrA3gR6gEeJDH8QniP_Ozcv1Jh51v-Vtu-HiEYHKYeVDAH7RDohGJjkD77oN1ERguiXGW2LdCRdooxvyLN3OQ53hyvoqwoWTT9xJrYjT5zKyB9NJa1GdXOv2zWKAditn36R7eJjDQKt5bYl0FtotGZ3RUom2r8G-8-fS_fSv7g9zX_V_NbAZ6XFIWX-Mk_TqKWTYZhlMgIsufgXP-49j-tfphDcJpjzLugE3HAdZL5dvDDwtVik6pg3OTpkzPYxphxnch_TgO1TU7aCDijL8rGHL-9ZVtFJHLMOb_UPr7lxpdN_sKMNrZDHq9zUuevpT3ql3tcS9_ogGVA1mpXvlKEuSZCBTdqC_MMzKSToriiTPs2mWz8b0hbIYxflsnmdFPM-TNCmOY_p7mGQ6mefTNC6yWVmWSZklx1dtqUSP?type=png)](https://mermaid.live/edit#pako:eNqNk01v2zAMhv-KoFMKxEH8EcfWugBB1h23Q7AdVvegyIwj1JYySW7XBfnvpaxkKBpkmy82X5APyVfygQpdA2XUws8elIBPkjeGdx8qRfDZc-OkkHuuHFm1EpS71NdgnsAEPeREi0UQGbmPHxhmiOgzOLGL1k4b3kC0FAKsZURpBbcbs_hqZCMVI7d6-Fh4baQ0EVo_SrA3gR6gEeJDH8QniP_Ozcv1Jh51v-Vtu-HiEYHKYeVDAH7RDohGJjkD77oN1ERguiXGW2LdCRdooxvyLN3OQ53hyvoqwoWTT9xJrYjT5zKyB9NJa1GdXOv2zWKAditn36R7eJjDQKt5bYl0FtotGZ3RUom2r8G-8-fS_fSv7g9zX_V_NbAZ6XFIWX-Mk_TqKWTYZhlMgIsufgXP-49j-tfphDcJpjzLugE3HAdZL5dvDDwtVik6pg3OTpkzPYxphxnch_TgO1TU7aCDijL8rGHL-9ZVtFJHLMOb_UPr7lxpdN_sKMNrZDHq9zUuevpT3ql3tcS9_ogGVA1mpXvlKEuSZCBTdqC_MMzKSToriiTPs2mWz8b0hbIYxflsnmdFPM-TNCmOY_p7mGQ6mefTNC6yWVmWSZklx1dtqUSP)

sequenceDiagram;
    Teilnehmer Client
    Teilnehmer Server
    Client->>Server: [1]: Sec-Fetch-Storage-Access: none<br>Origin: <origin><br>(ohne Cookies)
    Server-- >>Client: [2]: Vary: Sec-Fetch-Storage-Access<br>[Fallback-Inhalt]
    Hinweis über Client: Einbettung ruft requestStorageAccess() mit<br>transient activation auf, um Berechtigung anzufordern.
    Hinweis über Client: Benutzer erteilt Berechtigung<br>Einbettung lädt sich neu (Anfrage enthält Cookies)
    Client->>Server: [3]: Sec-Fetch-Storage-Access: active<br>Origin: <origin><br>Cookie: userid=123
    Server-- >>Client: [4]: Activate-Storage-Access: load<br>Vary: Sec-Fetch-Storage-Access<br>[Inhalt]
    Hinweis über Client: Client lädt Widget mit aktiver SAA-Berechtigung
-->

## Sicherheitsüberlegungen

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Prüfen Sie die folgende Liste, wenn Sie Probleme haben, eine Anfrage erfolgreich zu gestalten:

1. Der Berechtigungsantrag muss mit einer Benutzergeste ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Benutzer mit übermäßigen Zugriffsanfragen spammen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die API-Berechtigung bereits für einen anderen Kontext mit demselben `<oberste Website, eingebettete Website>`-Schlüssel erteilt wurde.
   - Der Aufrufer ein oberstes Dokument oder eine gleiche Site wie das oberste Dokument ist. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das oberste Dokument dürfen keinen `null` Ursprung haben.
3. Ursprünge, mit denen nie als Erstparteie interagiert wurde, haben kein Konzept von Erstparteiespeicher. Aus Sicht der Benutzer haben sie nur eine Drittpartei-Beziehung zu diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Benutzer kürzlich nicht im Erstparteie-Kontext mit den eingebetteten Inhalten interagiert hat (in Firefox bedeutet "kürzlich" innerhalb von 30 Tagen).
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Um dies zu handeln, stellt die API den [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [sandbox token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) bereit. Das `<iframe>` muss dies enthalten, um Speicherzugriffsanfragen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, damit es ein Skript ausführen kann, um die API aufzurufen und sie in einem Ursprung auszuführen, der Cookies/Zustand haben kann:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Verwendung dieser Funktion kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server eingestellt ist.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browserspezifische Prüfungen bestehen. Beispiele: Allowlisten, Blocklisten, On-Device-Klassifikation, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Anfordern des expliziten Benutzerbestätigung.

## Browserspezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede im Grad und Umfang des Zugriffs auf Drittanbieter-Cookies erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund der Unterschiede in deren Speicherzugriffspolitiken.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)-Attribut gesetzt haben.
- Die Speicherzugriffsberechtigungen werden nach 30 Tagen ohne Benutzerinteraktion im Browser schrittweise entfernt. Die Interaktion mit den eingebetteten Inhalten verlängert diese Grenze um weitere 30 Tage. Dies tritt nicht auf, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da sich der Benutzer bereits auf der Seite befindet.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Drittanbieter-Cookie-Zugriff auf den obersten Ursprung `foo.example` erhalten hat und der Benutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut einbindet, kann der eingebettete Ursprung sofort Drittanbieter-Cookie-Zugriff beim Laden haben, wenn dieser Besuch vor weniger als 30 Tagen stattfand.
- Die Speicherzugriffsberechtigungen werden nach Ablauf von 30 Kalendertagen schrittweise entfernt.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox zum Blockieren von Tracking-Cookies enthält eine [detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs der Speicherzugriffsberechtigungen.

### Safari

- Die Speicherzugriffsberechtigungen werden nach 30 Tagen ohne Benutzerinteraktion im Browser schrittweise aufgehoben. Der erfolgreiche Einsatz der Storage Access API setzt diesen Zähler zurück.

## Beispiele

- Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungs-Leitfaden mit Codebeispielen.

## API-Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugriff auf Drittanbieter-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt Inhalten, die in einem Drittanbieter-Kontext geladen sind (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf Drittanbieter-Cookies und unpartitionierten Status anzufordern; gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Zugriff gewährt wurde, und ablehnt, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ein vorgeschlagener Erweiterung der Storage Access API, die es obersten Websites ermöglicht, den Zugriff auf Drittanbieter-Cookies im Namen von eingebetteten Inhalten von einer anderen Website in derselben [related website set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) anzufordern. Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Zugriff gewährt wurde, und ablehnt, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen werden an das von diesen Methoden zurückgegebene Versprechen weitergeleitet, sodass die Aufrufer Aktionen ausführen können, die Benutzerg

interaktion erfordern, ohne einen zweiten Klick zu verlangen. Beispielsweise könnte ein Aufrufer ein Popup-Fenster von dem aufgelösten Versprechen aus öffnen, ohne Firefox' Pop-Up-Blocker auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Funktionsname
  - : In unterstützenden Browsern kann dies abfragen, ob der Drittanbieter-Cookie-Zugriff im Allgemeinen gewährt wurde, d.h. an eine andere Same-Site-Einbettung. Ist dies der Fall, können Sie `requestStorageAccess()` ohne Benutzerinteraktion aufrufen, und das Versprechen wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Funktionsname {{experimental_inline}}
  - : Ein separater Funktionsname, der verwendet wird, um abzufragen, ob die Berechtigung für den Zugriff auf Drittanbieter-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. In diesem Fall müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}}-Direktive kontrolliert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die Speicherzugriffs-API verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

#### Storage access headers

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffstatus" für den aktuellen Anforderungs-Kontext an, der einer von `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine bestehende Berechtigung für sicheren Zugang aktivieren und die Anfrage mit Cookies erneut ausführen kann oder eine Ressource mit Cookie-Zugang laden kann, wenn er bereits eine aktivierte Berechtigung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit Blog)
