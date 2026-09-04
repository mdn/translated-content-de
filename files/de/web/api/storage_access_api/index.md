---
title: Storage Access API
slug: Web/API/Storage_Access_API
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{DefaultAPISidebar("Storage Access API")}}{{securecontext_header}}

Die Storage Access API bietet eine Möglichkeit für Cross-Site-Inhalte, die in einem Drittanbieter-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) zu erhalten, auf den sie typischerweise nur in einem First-Party-Kontext zugreifen könnten (d.h. wenn sie direkt in einem Browser-Tab geladen werden).

Die Storage Access API ist für User-Agents relevant, die standardmäßig den Zugriff auf Third-Party-Cookies und unpartitionierte Zustände blockieren, um die Privatsphäre zu verbessern (z. B. um Tracking zu verhindern). Es gibt legitime Nutzungsfälle für Third-Party-Cookies und unpartitionierte Zustände, die wir auch mit diesen Standardbeschränkungen weiterhin ermöglichen möchten. Beispiele sind Single Sign-On (SSO) mit föderierten Identitätsanbietern (IdPs) oder das Speichern von Nutzerdaten wie Standortinformationen oder Anzeigeeinstellungen über verschiedene Websites hinweg.

Die API bietet Methoden, die es eingebetteten Ressourcen ermöglichen, zu überprüfen, ob sie derzeit Zugang zu Third-Party-Cookies haben und, falls nicht, diesen Zugang vom User-Agent anzufordern.

## Konzepte und Nutzung

Browser implementieren mehrere Zugriffsfunktionen und -richtlinien, die den Zugriff auf Third-Party-Cookies und unpartitionierte Zustände einschränken. Diese reichen von der Bereitstellung eines einzigartigen Cookie-Speichers für eingebettete Ressourcen unter jedem Top-Level-Ursprung ([partitionierte Cookies](#unpartitionierte_versus_partitionierte_cookies)) bis hin zur vollständigen Blockierung des Cookie-Zugriffs, wenn Ressourcen in einem Drittanbieter-Kontext geladen werden.

Die Semantik von Funktionen und Richtlinien zur Blockierung von Third-Party-Cookies und unpartitioniertem Zustand unterscheidet sich von Browser zu Browser, aber die Kernfunktionalität ist ähnlich. Cross-Site-Ressourcen, die in einem Drittanbieter-Kontext eingebettet sind, erhalten keinen Zugriff auf den gleichen Zustand, den sie beim Laden in einem First-Party-Kontext hätten. Dies geschieht in guter Absicht — Browser-Anbieter möchten Maßnahmen ergreifen, um die Privatsphäre und Sicherheit der Nutzer besser zu schützen. Beispiele sind, sie weniger anfällig dafür zu machen, dass ihre Aktivitäten über verschiedene Websites hinweg verfolgt werden, und sie weniger anfällig für Exploits wie Cross-Site-Request-Forgery ({{Glossary("CSRF", "CSRF")}}) zu machen.

Es gibt jedoch legitime Nutzungen für eingebettete Cross-Site-Inhalte, die auf Third-Party-Cookies und unpartitionierte Zustände zugreifen, die die oben genannten Funktionen und Richtlinien bekanntermaßen beeinträchtigen. Angenommen, Sie haben eine Reihe verschiedener Websites, die Zugang zu unterschiedlichen Produkten bieten — `heads-example.com`, `shoulders-example.com`, `knees-example.com` und `toes-example.com`.

Alternativ könnten Sie Ihre Inhalte oder Dienstleistungen in verschiedenen Länderdomains für Lokalisierungszwecke trennen — `example.com`, `example.ua`, `example.br` usw. — oder auf andere Weise.

Sie könnten begleitende Dienstprogramm-Websites mit Komponenten haben, die in allen anderen Websites eingebettet sind, zum Beispiel, um SSO (`sso-example.com`) oder allgemeine Personalisierungsdienste (`services-example.com`) bereitzustellen. Diese Dienstprogramm-Websites möchten ihren Zustand über Cookies mit den eingebetteten Websites teilen. Sie können jedoch keine First-Party-Cookies teilen, da sie sich auf unterschiedlichen Domains befinden, und Third-Party-Cookies funktionieren in Browsern, die sie blockieren, nicht mehr.

In solchen Situationen ermutigen Website-Betreiber die Nutzer oft, ihre Website als Ausnahme hinzuzufügen oder die Richtlinien zur Blockierung von Third-Party-Cookies vollständig zu deaktivieren. Nutzer, die weiterhin mit ihren Inhalten interagieren möchten, müssen ihre Blockierungsrichtlinie für Ressourcen, die von allen eingebetteten Ursprüngen geladen werden, und möglicherweise über alle Websites hinweg erheblich lockern.

Die Storage Access API soll dieses Problem lösen; eingebettete Cross-Site-Inhalte können über die Methode [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) unbeschränkten Zugriff auf Third-Party-Cookies und unpartitionierten Zustand Frame-für-Frame anfordern. Sie kann auch überprüfen, ob bereits Zugriff besteht, über die Methode [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).

> [!NOTE]
> Die [Storage Access-Header](#storage_access_headers) sind eine HTTP-Erweiterung der API, die einen effizienteren Storage-API-Arbeitsablauf ermöglicht und auch verwendet werden kann, um zuvor gewährte Zugriffsberechtigungen für passive Ressourcen wie Bilder zu aktivieren.

### Unpartitionierte versus partitionierte Cookies

Die Storage Access API wird nur benötigt, um Zugriff auf _unpartitionierte_ Third-Party-Cookies zu gewähren!
Unpartitionierte Cookies sind solche, bei denen alle auf derselben Website gesetzten Cookies im selben Cookie-Container gespeichert werden — die traditionelle Methode seit den Anfängen des Webs. Da das Risiko besteht, dass Daten, die für eine Website bestimmt sind, anderen Websites offengelegt werden, blockieren Browser häufig das Senden unpartitionierter Third-Party-Cookies in Anfragen und erlauben den Zugriff auf sie in eingebetteten Kontexten nicht.

Dies steht in Kontrast zu _partitionierten_ Cookies, bei denen eingebettete Ressourcen unter jeder Top-Level-Website einen einzigartigen Cookie-Speicherplatz erhalten, der von denen anderer Sites isoliert ist. Da es kein Privatsphäre-Risiko gibt, da es nicht möglich ist, Nutzer über Websites hinweg durch partitionierte Cookies zu verfolgen, senden Browser partitionierte Cookies in Anfragen und machen sie für eingebettete Ressourcen verfügbar. Beachten Sie jedoch, dass die Cookies nicht zwischen Websites geteilt werden, sie also auch nicht automatisch über Websites synchronisiert werden. Browser haben verschiedene Mechanismen, um den Zugriff auf Third-Party-Cookies zu partitionieren, zum Beispiel [Firefox Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/) und [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

Wenn wir im Zusammenhang mit der Storage Access API über Third-Party-Cookies sprechen, meinen wir implizit _unpartitionierte_ Third-Party-Cookies.

### Funktionsweise

Drittanbieter-Inhalte, die in ein {{htmlelement("iframe")}} eingebettet sind, und auf Cookies oder andere unpartitionierte Zustände zugreifen müssen, können den Zugang über die Storage Access API wie folgt anfordern:

1. [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess) kann aufgerufen werden, um zu überprüfen, ob der eingebettete Inhalt bereits Zugang zu unpartitionierten Cookies hat.
2. Falls nicht, kann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit {{Glossary("transient_activation", "transient activation")}} aufgerufen werden, um die `storage-access`-Berechtigung anzufordern.

   Abhängig vom Browser wird der Nutzer in leicht unterschiedlicher Weise gefragt, ob er die Berechtigung für das anfordernde Embed erteilen möchte.
   - Safari zeigt Aufforderungen für alle eingebetteten Inhalte an, die zuvor keinen Speicherzugriff erhalten haben.
   - Firefox fordert Benutzer nur auf, nachdem eine Herkunft auf mehr als einer Schwelle von Websites Zugang zum Speicher angefordert hat.
   - Chrome zeigt für alle eingebetteten Inhalte Aufforderungen an, die zuvor keinen Speicherzugriff erhalten haben.
     Es wird jedoch automatisch Zugang gewähren und Aufforderungen überspringen, wenn die eingebetteten Inhalte und die einbettende Seite Teil desselben [related website set](https://privacysandbox.google.com/cookies/related-website-sets-integration) sind.

3. Die Berechtigung wird erteilt oder verweigert, basierend darauf, ob alle Sicherheitsanforderungen erfüllt sind — siehe [Sicherheitshinweise](#sicherheitshinweise) für allgemeine Anforderungen und [Browser-spezifische Variationen](#browser-spezifische_variationen) für einige browser-spezifische Sicherheitsanforderungen. Die auf {{jsxref("Promise")}} basierende Natur von `requestStorageAccess()` ermöglicht es, Code auszuführen, um Erfolgs- und Fehlersituationen zu bearbeiten.

   Sobald die Berechtigung erteilt wird, wird ein Berechtigungsschlüssel im Browser mit der Struktur `<top-level site, embedded site>` gespeichert. Zum Beispiel, wenn die einbettende Seite `embedder.com` ist und das Embed `locator.example.com` ist, wäre der Schlüssel `<embedder.com, example.com>`.

   Dies bedeutet, dass die Berechtigung für den unpartitionierten Cookie-Zugriff auf jede Seite der Website `example.com` oder einer ihrer Subdomains gewährt wird, die in jeder Seite der Website `embedder.com` eingebettet ist. Zum Beispiel können `docs.example.com`, `profile.example.com` nun `requestStorageAccess()` aufrufen und das Versprechen würde automatisch erfüllt.

   > [!NOTE]
   > Ältere Versionspezifikationen verwendeten die spezifischere Berechtigungsschlüsselstruktur `<top-level site, embedded origin>`, was bedeutete, dass gleichseitige, cross-origin Embeds nicht mit dem Berechtigungsschlüssel übereinstimmten und den gesamten Prozess separat durchlaufen mussten.

4. Die Berechtigung muss für jeden _Kontext_ explizit aktiviert werden.

   Wenn einem Embed eine Berechtigung gewährt wird, wird diese Berechtigung auch für den aktuellen Kontext aktiviert. Andere Kontexte wie neue Browser-Tabs oder Inhalte in anderen {{htmlelement("iframe")}}-Elementen auf der Seite haben jedoch standardmäßig ihren Third-Party-Cookie-Zugriff blockiert. Das bedeutet, dass auch wenn eine Berechtigung erteilt wurde, die Seite geladen und `requestStorageAccess()` aufgerufen werden muss, um die Berechtigung zu aktivieren. Wenn die Berechtigung bereits erteilt wurde, ist es nicht erforderlich, eine Transient Activation durchzuführen, und das Versprechen wird automatisch erfüllt.

   Die einzige Ausnahme von dem "standardmäßig blockierten" Verhalten ist, wenn ein Embed nach dem Erteilen oder Aktivieren einer Berechtigung eine gleich-ursprünliche Navigation durchführt, um sich selbst neu zu laden. In solchen Fällen wird der Speicherzugang von der vorherigen Navigation übernommen. Dies ermöglicht es, dass sich die eingebettete Ressource selbst neu lädt und Zugriff auf ihre Cookies erhält.

   > [!NOTE]
   > In älteren Versionspezifikationen war der Zugriff _seitenweise_ (Safari ist der einzige Browser, der dieses Modell weiterhin verwendet). Wenn ein Embed Third-Party-Cookie-Zugriff über `requestStorageAccess()` erhielt, erhielten automatisch alle anderen gleichen Site-Embeds Zugriff.
   > Dies war aus sicherheitstechnischer Sicht kein gewünschtes Verhalten — zum Beispiel, wenn `shop.example.com` `locator.users.com` embedded, um Nutzern zu ermöglichen, ihre Standortinformationen beim Einkauf zu nutzen, und `locator.users.com` ruft `requestStorageAccess()` auf, könnten `shop.example.com` und alle anderen eingebetteten Seiten auf ihre Cookies zugreifen, aber auch auf Cookies von `private.users.com`, die nicht eingebettet werden sollen. [Lesen Sie mehr über die Motivationen](https://github.com/privacycg/storage-access/issues/113) hinter dieser Änderung.

5. Nachdem ein Embed die Speicherzugriffsberechtigung aktiviert hat, sollte es sich selbst neu laden. Der Browser fordert die Ressource erneut mit enthaltenen Third-Party-Cookies an und macht sie der eingebetteten Ressource zugänglich, sobald sie geladen ist. Die Cross-Origin-Anforderungen des Embed folgen der [same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy), daher werden Third-Party-Cookies nur mit Anfragen an den genauen Ursprung der eingebetteten Ressource gesendet. Andere Ursprünge innerhalb derselben Site, die auf Third-Party-Cookies zugreifen möchten, müssen die Speicherzugriffsberechtigung separat aktivieren.

### Storage Access Headers

Die API erfordert, dass eine Ressource `requestStorageAccess()` für jeden neuen Kontext aufruft, um die Aktivierung der Speicherzugriffsberechtigung zu wählen, die bereits gewährt sein muss. Dies bedeutet wiederum, dass die eingebettete Ressource zuerst ohne Cookies angefordert und geladen werden muss, damit sie die Methode aufrufen kann.

Die Storage Access Headers ermöglichen einen Arbeitsablauf, bei dem der Server die Aktivierung der Berechtigung für den Kontext anfordern kann, um eine unnötige zusätzliche Ladung der eingebetteten Ressource zu vermeiden, falls die Berechtigung bereits gewährt wurde. Die Ressource muss dennoch geladen werden, um die Berechtigung erstmals anzufordern.

Es gibt zwei Header:

- Der Browser fügt den {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header zu Anfragen hinzu, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzuzeigen, z. B. ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde.
- Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser aufzufordern, die Berechtigung für den Kontext zu aktivieren und die Anfrage mit Cookies erneut zu versuchen (um zu vermeiden, dass die Ressource geladen werden muss, damit sie `requestStorageAccess()` aufrufen kann, um dasselbe zu erreichen), oder die Berechtigung zu aktivieren und die zurückgegebene Ressource zu laden.

Die Storage Access Headers können auch verwendet werden, um Berechtigungen für passive Ressourcen wie Bilder zu aktivieren, vorausgesetzt, der Kontext hat bereits eine Berechtigung erhalten. Dies könnte verwendet werden, um beispielsweise verschiedene Bilder für verschiedene Nutzer, Demografien oder Lokale bereitzustellen.

Die Arbeitsabläufe werden im Abschnitt [Speicherzugriffsheader Sequenzen](#storage_access_header_sequenzen) dargestellt.

### Request/Response-Fluss

#### JavaScript-Sequenzen

Betrachten Sie das Beispiel einer Bibliothek, die in einem {{htmlelement("iframe")}} geladen ist, die über eine Anzahl von Websites hinweg geteilt werden muss und sich auf Anmeldedaten in unpartitionierten Cookies verlässt.

Schauen wir zuerst den Fall an, bei dem die Berechtigung nicht erteilt wurde:

1. Der Browser fordert die Ressource an, ohne Third-Party-Cookies einzubeziehen.
2. Der Server antwortet mit einer "Fallback"-Version des Inhalts, die keine Anmeldedaten erfordert und die kein Zugriff auf ihre Cookies hat, wenn sie geladen wird.
   - Sobald sie geladen ist, ruft die Ressource `requestStorageAccess()` mit transiente Aktivierung auf, um die `storage-access`-Berechtigung anzufordern und zu aktivieren.
   - Wenn die Berechtigung erteilt wird, lädt sich die Ressource selbst neu.

3. Der Browser fordert die Ressource erneut an, diesmal mit Third-Party-Cookies.
4. Die Serverantwort enthält eine "Anmelde"-Version der Ressource.

Der Browser lädt die Ressource, die Zugriff auf ihre eigenen Cookies hat, da sie eine aktivierte `storage-access`-Berechtigung hat.

![Storage API Workflow - ohne storage-access Berechtigung](storage_api_no_permission.png)

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

Nun betrachten wir den Fall, bei dem die Berechtigung erteilt, aber nicht aktiviert wurde. Dies würde passieren, wenn Sie dieselbe URL in einem neuen Browser-Tab öffnen oder versuchen, dieselbe Ressource von einer anderen Seite innerhalb derselben Website einzubetten.

Der Arbeitsablauf ist fast genau der gleiche, da die Ressource immer noch zum ersten Mal ohne Cookies geladen werden muss und dann `requestStorageAccess()` aufrufen muss, um die Berechtigung für den Kontext zu aktivieren. In diesem Fall benötigt es jedoch keine Transient Activation und kann beim Laden ausgeführt werden.

![Storage API Workflow - Activating storage-access permission](storage_api_permission.png)

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

#### Storage Access Header Sequenzen

Die Storage Access Header ermöglichen einen verbesserten Arbeitsablauf, der es dem Server ermöglicht, den Browser aufzufordern, eine bereits gewährte Berechtigung zu aktivieren und die Anfrage mit enthaltenen Cookies erneut auszuführen. Dies vermeidet die Anforderung, die Ressource für den Aufruf von `requestStorageAccess()` zu laden, wenn der Nutzer bereits die Berechtigung gewährt hat.

> [!NOTE]
> Diese Header bieten keinen Mechanismus, um die Speicherzugriffsberechtigung zunächst zu gewähren. Die Berechtigung muss immer von der eingebetteten Ressource durch Aufruf von `requestStorageAccess()` mit transiente Activation angefordert werden.

Der {{HTTPHeader("Sec-Fetch-Storage-Access")}} Header wird zu Anfragen hinzugefügt, um den Speicherzugriffsstatus des aktuellen Abrufkontexts anzuzeigen, wie z. B. ob die Berechtigung aktiviert, gewährt oder nicht gewährt wurde. Abhängig vom Speicherzugriffsstatus der Anfrage kann der Server mit einem {{HTTPHeader("Activate-Storage-Access")}} Header antworten, um den Browser aufzufordern, die Berechtigung für den Kontext zu aktivieren und die Anfrage mit Cookies erneut auszuführen.

Betrachten wir zuerst den Fall des Versuchs, eine eingebettete Ressource für einen neuen Kontext zu laden, dem bereits die Berechtigung gewährt wurde:

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: inactive`, um anzugeben, dass die Berechtigung für den Kontext gewährt, aber inaktiv ist.
   - Die Anfrage wird auch den {{httpheader("Origin")}} Header enthalten, um dem Server zu helfen zu entscheiden, ob er die Berechtigung aktivieren möchte.
2. Der Server kann mit `Activate-Storage-Access: retry` antworten, um anzugeben, dass der Browser die Berechtigung aktivieren und die Anfrage mit Cookies erneut versuchen soll.
   - Die Antwort sollte auch den {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} Header enthalten, da sie vom Wert von `Sec-Fetch-Storage-Access` abhängt.
   - Beachten Sie, dass der Inhalt nicht in der Antwort enthalten ist.
3. Wenn der Browser die Anfrage wiederholt, fügt er `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, zusammen mit den Cookies.
4. Der Server antwortet dann mit `Activate-Storage-Access: load`, das den Browser anweist, die neue Version der Bibliothek mit Zugriff auf Third-Party-Cookies zu laden.

![Storage Access Header Workflow - Aktivierung der storage-access Berechtigung und Wiederholung](storage_headers_activate_permission.png)

<!--
[![](https://mermaid.ink/img/pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA?type=png)](https://mermaid.live/edit#pako:eNqFkkFP4zAQhf-KNSdWaqq2SWhr2EpVYY_LoRIHCAdjD6m1jd21J0Cp-t-ZJGW1oqJEimw_zXxv_OQdaG8QJET8W6PTeGVVGVR1UTjB30YFstpulCOxWFt0dKwvMTxj6PSuJpnNOlGK--GD5Aqd_ELSq2RJPqgSk7nWGKMU1ilN9hkvH8PsJtjSOikufbuZNdqZ80J7_8di_NE5dOCELTovthixxbzBKMIjh4AUtg3qVoXt16N08N-eUHjmiw94twp1wEcRD22qbRMbDJWN0XrXeChnWkMel1cONJI4e7G0-nSJ45jSkzGdDmnRsqWoIwZrfg5H6ZdRZaeiWntlvk-qqbjX3hETH76JrSFG8WJNiSTaHJbz-X-ZHS5WOOhBybODpFBjDyquUM0Rdo1DAbTCCguQvDX4pOo1FVC4PbfxE7zzvvroDL4uVyCf1Dryqd4YvujhSX9Sr43le_0TAzqDYeFrRyBHk0lLBrmDV5BpOujnwywfTPkfT_PzHmxB5ml_mo6z8ZCFLM8G6b4Hb-0og_5knO_fAfjRIqA)

sequenceDiagram;
    participant Client
    participant Server
    Client->>Server: [1]: Sec-Fetch-Storage-Access: inactive<br>Origin: <origin><br>(no cookies)
    Server-- >>Client: [2]: Activate-Storage-Access: retry<br>Vary: Sec-Fetch-Storage-Access
    Note over Client: Client aktiviert storage-access Berechtigung<br>und wiederholt Anfrage (mit Cookies)
    Client->>Server: [3]: Sec-Fetch-Storage-Access: active<br>Origin: <origin><br>Cookie: userid=123
    Server-- >>Client: [4]: Activate-Storage-Access: load<br>Vary: Sec-Fetch-Storage-Access<br>[content]
    Note over Client: Client lädt Widget mit aktiver SAA-Berechtigung
-->

Der letzte Zustand, den wir berücksichtigen müssen, ist, wenn eine eingebettete Ressource geladen wird, für die keine Berechtigung erteilt wurde:

> [!NOTE]
> Da wir die Header nicht verwenden können, um die Berechtigung zu gewähren, müssen wir die Ressource ohne Cookies laden, damit sie die Berechtigung anfordern kann. Dies ist die gleiche Sequenz, als ob die Header nicht angewendet würden.

1. Der Browser sendet eine Anfrage mit `Sec-Fetch-Storage-Access: none`, um anzugeben, dass die Berechtigung nicht erteilt wurde.
2. Der Server antwortet dann mit der Ressource, die bei Laden die Berechtigung für sicheren Zugriff mit transiente Aktivierung anfordert. Der `Activate-Storage-Access` Header ist nicht in der Antwort enthalten, aber der Server sollte {{httpheader("Vary","Vary: Sec-Fetch-Storage-Access")}} hinzufügen.

   Nachdem der Nutzer die Berechtigung erteilt (und damit aktiviert) hat, lädt sich das Embed selbst neu.

3. Der Browser fügt `Sec-Fetch-Storage-Access: active` zur Anfrage hinzu, um anzugeben, dass der Kontext eine aktivierte `storage-access`-Berechtigung hat, und schließt die Third-Party-Cookies ein.
4. Der Server antwortet mit `Activate-Storage-Access: load`, das den Browser anweist, die neue Version der Bibliothek mit Zugriff auf Third-Party-Cookies zu laden.

![Storage Access Header Workflow - ohne storage-access Berechtigung](storage_headers_no_permission.png)

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

## Sicherheitshinweise

Verschiedene Sicherheitsmaßnahmen könnten dazu führen, dass ein Aufruf von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) fehlschlägt. Überprüfen Sie die untenstehende Liste, falls Sie Probleme haben, eine Anfrage zum Laufen zu bringen:

1. Die Berechtigungsanfrage muss mit einer Nutzeraktion ({{Glossary("transient_activation", "transient activation")}}) wie einem Tippen oder Klicken verbunden sein. Dies verhindert, dass eingebettete Inhalte auf der Seite den Browser oder Nutzer mit übermäßigen Anfragen zuspammen. Beachten Sie, dass dies nicht erforderlich ist, wenn:
   - Die Berechtigung zur Nutzung der API wurde bereits einem anderen Kontext mit demselben `<top-level site, embedded site>` Schlüssel erteilt.
   - Der Anrufer ist ein Top-Level-Dokument oder gleichseitig mit dem Top-Level-Dokument. In solchen Fällen muss `requestStorageAccess()` wahrscheinlich überhaupt nicht aufgerufen werden.
2. Das Dokument und das Top-Level-Dokument dürfen keinen null-Urspung haben.
3. Ursprünge, mit denen als First-Party nie interagiert wurde, haben keinen Begriff von First-Party-Speicher. Aus der Perspektive des Nutzers haben sie nur eine Drittanbieterbeziehung mit diesem Ursprung. Zugriffsanfragen werden automatisch abgelehnt, wenn der Browser erkennt, dass der Nutzer kürzlich (in Firefox innerhalb von 30 Tagen) nicht mit dem eingebetteten Inhalt in einem First-Party-Kontext interagiert hat.
4. Das Fenster des Dokuments muss ein [sicherer Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) sein.
5. Sandboxed {{htmlelement("iframe")}}s können aus Sicherheitsgründen standardmäßig keinen Speicherzugriff erhalten. Um dies zu handhaben, bietet die API das [`allow-storage-access-by-user-activation`](/de/docs/Web/HTML/Reference/Elements/iframe#allow-storage-access-by-user-activation) [sandbox token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox). Das `<iframe>` muss dies einschließen, um Speicherzugriffsanfragen zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um das Ausführen eines Skripts zu ermöglichen, das die API aufrufen und in einem Ursprung ausführen kann, der Cookies/Zustand haben darf:

   ```html
   <iframe
     sandbox="allow-storage-access-by-user-activation
                   allow-scripts
                   allow-same-origin">
     …
   </iframe>
   ```

6. Die Verwendung dieses Features kann durch eine {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden, die auf Ihrem Server festgelegt ist.

> [!NOTE]
> Das Dokument muss möglicherweise auch zusätzliche browser-spezifische Checks bestehen. Beispiele: Whitelists, Blacklists, On-Device-Klassifikation, Benutzereinstellungen, Anti-[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)-Heuristiken oder das Auffordern des Nutzers zur expliziten Erteilung einer Berechtigung.

## Browser-spezifische Variationen

Obwohl die API-Oberfläche gleich ist, sollten Websites, die die Storage Access API verwenden, Unterschiede in der Ebene und dem Umfang des Zugriffs auf Third-Party-Cookies erwarten, den sie zwischen verschiedenen Browsern erhalten, aufgrund von Unterschieden in deren Zugriffspolitiken.

### Chrome

- Cookies müssen explizit [`SameSite=None`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) gesetzt haben, da der Standardwert für Chrome `SameSite=Lax` ist (`SameSite=None` ist der Standard in Firefox und Safari).
- Cookies müssen das [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) Attribut gesetzt haben.
- Die Speicherzugriffsgewährungen laufen nach 30 Tagen Browsernutzung ohne Benutzereingriff aus. Interaktion mit dem eingebetteten Inhalt verlängert diese Grenze um weitere 30 Tage. Dies geschieht nicht, wenn [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) aufgerufen wird, da der Nutzer bereits auf der Seite ist.

### Firefox

- Wenn der eingebettete Ursprung `tracker.example` bereits Zugriff auf Third-Party-Cookies auf dem Top-Level-Ursprung `foo.example` erhalten hat und der Nutzer eine Seite von `foo.example` besucht, die eine Seite von `tracker.example` erneut innerhalb von weniger als 30 Tagen einbettet, hat der eingebettete Ursprung sofortigen Zugriff auf Third-Party-Cookies beim Laden.
- Die Speicherzugriffsgewährungen laufen nach 30 Kalendertagen aus.

Die Dokumentation zur neuen Speicherzugriffspolitik von Firefox für die Blockierung von Tracking-Cookies enthält [eine detaillierte Beschreibung](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#storage_access_grants) des Umfangs von Speicherzugriffsgewährungen.

### Safari

- Die Speicherzugriffsgewährungen verlaufen nach 30 Tagen Browsernutzung ohne Benutzereingriff. Eine erfolgreiche Nutzung der Storage Access API setzt diesen Zähler zurück.
- Nachdem ein Embed die Speicherzugriffsberechtigung aktiviert hat und sein Inhalt erneut angefordert wurde, werden Third-Party-Cookies mit Anfragen an die _Seite_ der eingebetteten Ressource gesendet und nicht an den Ursprung. Safari verwendet immer noch ein älteres Design, das nicht der same-origin policy folgt.

## Beispiele

- Siehe [Die Storage Access API verwenden](/de/docs/Web/API/Storage_Access_API/Using) für einen Implementierungsleitfaden mit Codebeispielen.

## API Methoden

- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem boolean Wert auflöst, der angibt, ob das Dokument Zugriff auf Third-Party-Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht Inhalten, die in einem Third-Party-Kontext geladen werden (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf Third-Party-Cookies und unpartitionierten Zustand zu beantragen; gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{deprecated_inline}}
  - : Eine nicht standardisierte veraltete Erweiterung der Storage Access API, die es Top-Level-Sites ermöglicht, Third-Party-Cookie-Zugriff im Namen von eingebetteten Inhalten von einer anderen Site innerhalb desselben [related website set](https://privacysandbox.google.com/cookies/related-website-sets-integration) zu beantragen. Gibt ein {{jsxref("Promise")}} zurück, das sich erfüllt, wenn der Zugriff gewährt wurde, und abgelehnt wird, wenn der Zugriff verweigert wurde.

> [!NOTE]
> Benutzerinteraktionen werden an das Promise weitergegeben, das von diesen Methoden zurückgegeben wird, was es den Anrufern ermöglicht, Aktionen auszuführen, die Benutzerinteraktionen erfordern, ohne einen zweiten Klick zu benötigen. Zum Beispiel könnte ein Anrufer ein Pop-up-Fenster aus dem gelösten Promise öffnen, ohne den Popup-Blocker von Firefox auszulösen.

### Ergänzungen zu anderen APIs

- [`Permissions.query()`](/de/docs/Web/API/Permissions/query), der `"storage-access"` Feature-Name
  - : In unterstützenden Browsern kann dieser abgefragt werden, ob Zugriff auf Third-Party-Cookies allgemein gewährt wurde, also für ein anderes gleichseitiges Embed. Falls ja, kann `requestStorageAccess()` ohne Benutzerinteraktion aufgerufen werden, und das Promise wird automatisch aufgelöst.
- `Permissions.query()`, der `"top-level-storage-access"` Feature-Name {{experimental_inline}}
  - : Ein separater Feature-Name wird verwendet, um abzufragen, ob die Berechtigung zum Zugriff auf Third-Party-Cookies bereits über `requestStorageAccessFor()` gewährt wurde. Falls ja, müssen Sie `requestStorageAccessFor()` nicht erneut aufrufen.

### Ergänzungen zu HTTP

#### Permissions-Policy

- {{httpheader("Permissions-Policy/storage-access","Permissions-Policy: storage-access")}}
  - : Die `storage-access` {{HTTPHeader("Permissions-Policy")}} Direktive steuert, ob ein Dokument, das in einem Third-Party-Kontext geladen wird (d.h. eingebettet in ein {{htmlelement("iframe")}}), die Storage Access API verwenden darf, um Zugriff auf unpartitionierte Cookies zu beantragen.

#### Storage Access Headers

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Storage Access Status" für den aktuellen Anforderungskontext an, der einer von: `none`, `inactive` oder `active` sein wird.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine bestehende Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies erneut ausführen oder eine Ressource mit Cookie-Zugriff laden kann, wenn er bereits eine aktivierte Berechtigung hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Storage Access API verwenden](/de/docs/Web/API/Storage_Access_API/Using)
- [Einführung der Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit-Blog)
