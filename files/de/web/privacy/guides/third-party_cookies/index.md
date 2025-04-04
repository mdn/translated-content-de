---
title: Cookies von Drittanbietern
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

Dieser Artikel erklärt, was Cookies von Drittanbietern sind, beschreibt die damit verbundenen Probleme und erläutert, wie Sie diese Probleme umgehen können.

## Was sind Cookies von Drittanbietern?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einem bestimmten Domain und Schema (normalerweise `https`) verknüpft und kann auch mit Subdomains verknüpft werden, wenn das {{HTTPHeader("Set-Cookie")}}-`Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer gerade betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom gleichen Standort wie die Seite betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom gleichen Standort betrachtet und als _Third-Party-Cookie_ bezeichnet.

> [!NOTE]
> Third-Party-Cookies werden manchmal auch als _Cross-Site-Cookies_ bezeichnet. Dies ist vermutlich ein genauerer Name, da _Third-Party-Cookies_ eine Zugehörigkeit zu einem Drittunternehmen oder einer Organisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch dieselben, unabhängig davon, ob Sie alle beteiligten Sites besitzen oder nicht. Beispielsweise könnte eine Site Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzen.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer eine Seite zum ersten Mal besucht, einem internen Link zu einer anderen Seite auf derselben Site folgt oder eine Ressource aufruft, die sich auf derselben Site befindet (zum Beispiel ein eingebettetes Bild, Web-Font oder JavaScript-Datei).

Third-Party-Cookies werden in folgenden häufigen Situationen gesendet:

- Wenn auf einer Site ein Link angeklickt wird, um zu einer anderen Site zu navigieren.
- Wenn eine Seite Komponenten von anderen Sites einbettet, wie Bilder oder andere Dokumente in {{htmlelement("iframe")}}s (oft als _Third-Party-Inhalt_ bezeichnet). Neben der ursprünglichen Anfrage nach der Komponente können diese Komponenten weitere Anfragen generieren, die mehr Third-Party-Cookies setzen.

## Wozu werden Third-Party-Cookies verwendet?

Third-Party-Cookies, die beim Klicken auf Links zu anderen Sites gesetzt werden, werden für verschiedene Zwecke genutzt. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und beim Folgen des Links ein Cookie setzen, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweisenden zurückgezahlt werden kann.

Third-Party-Inhalte, die Cookies setzen, haben ebenfalls viele unterschiedliche Verwendungszwecke. Zum Beispiel könnte ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Sites eingebettet sein, das ein Cookie über alle Sites hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Site erneut anmelden muss.

Andere Anwendungsfälle für Third-Party-Cookies sind:

- Teilen von Benutzerpräferenzen oder Themen-Informationen über mehrere Sites.
- Sammeln von Analysedaten über mehrere Sites.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ads-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Anmelde-Widget-Beispiel mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), seine Community-Diskussionsforen (`forum.site`) und seinen Kundenservice und Rückgaben (`service.site`) hat.

Jede der drei Sites hat ein eingebettetes Anmelde-Widget, gehostet bei `auth.site`, um den Anmeldestatus über die Sites hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Sites anmelden, wodurch ein Cookie im Browser für `auth.site` erstellt wird, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Sites geht, hat die eingebettete `auth.site`-Instanz Zugang zu dem Sitzungs-ID-Cookie, das beim Anmelden auf der ersten Site gesetzt wurde. Diese kann es an den Server senden, überprüfen, ob es noch gültig ist, und ihn auf der Site sofort anmelden.

![Visuelle Darstellung der oben beschriebenen Third-Party-Anmeldesystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-Party-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Allerdings können Third-Party-Cookies auch für illegitime Zwecke ohne Zustimmung des Benutzers verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Durch das Folgen eines Links zu einer Third-Party oder die Interaktion mit eingebetteten Third-Party-Inhalten in einem `<iframe>` (zum Beispiel beim Ausfüllen eines Formulars oder Klicken auf einen Button) könnten Cookies gesetzt werden, die Informationen eines Benutzers in die Hände von jemandem gelangen lassen, den sie nicht erwartet haben. Diese Informationen könnten dazu genutzt werden:

- Benutzer mit gezielten Anzeigen im gesamten Web zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die Affiliate-Einnahmen erhöhen oder Statistiken manipulieren.

Einzeln sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Third-Party-Cookies kombinieren, die über verschiedene Sites gesetzt wurden, wo die Third-Party-Inhalte eingebettet sind, um ein detailliertes Profil der Browserverläufe, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um gruselige, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-Party-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerdaten, die auf illegitime Weise gewonnen wurden, werden ebenfalls oft an andere Dritte verkauft, was das Problem weiter multipliziert.

Rechtsvorschriften wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie Unternehmen gesetzlich verpflichtet haben, transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele hierfür sind das Einholen der Zustimmung der Kunden zu einer solchen Datenerfassung, das Ermöglichen, zu sehen, welche Daten ein Unternehmen über sie besitzt und das Löschen der Daten, wenn sie es wünschen. Es ist jedoch für die Kunden immer noch nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Third-Party-Cookies um?

Browserhersteller wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben deshalb begonnen, Third-Party-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode eingebaut haben, um langjährige Third-Party-Cookie-Probleme mit beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Third-Party-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox Tracking Protection](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Die Enhanced Tracking Protection kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Third-Party-Cookies ein separates Cookie-Glas pro Site gibt, um Cross-Site-Tracking zu verhindern. Im [strikten Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Third-Party-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Prevention-Richtlinie](https://webkit.org/tracking-prevention-policy/); diese zu befolgen hat zu einem ähnlichen Satz an Third-Party-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt der Erstellung blockiert Google Chrome Third-Party-Cookies standardmäßig nur im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass es Third-Party-Cookies jederzeit blockiert, wenn sie es über `chrome://settings` wünschen. Google hat begonnen, Third-Party-Cookies für einen begrenzten Prozentsatz von Chrome-Nutzern zu deaktivieren, um die Auswirkungen zu testen, während gleichzeitig Technologien entwickelt werden, die es ermöglichen, wichtige Anwendungsfälle ohne Third-Party-Cookies zu realisieren. Siehe [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Sites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt der Erstellung untersucht Microsoft auch, Third-Party-Cookies standardmäßig in Edge zu blockieren. Weitere Informationen finden Sie unter [Tracking Prevention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Nutzung von Third-Party-Cookies in Firefox auf einer fallweisen Basis über die Browsereinstellungen zu erlauben. In Safari sind die Steuerungsmöglichkeiten jedoch stärker eingeschränkt — Sie können das Cross-Site-Tracking-Prevention deaktivieren, aber der Zugriff auf Third-Party-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Third-Party-Cookies (oder einfach nur Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Cookie-Blocking kann dazu führen, dass einige Third-Party-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Third-Party-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu reduzieren: siehe [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies).

## Verwendung von Third-Party-Cookies

### Aktivierung von Third-Party-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server festlegen, ob/wann Third-Party-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert `Lax` verwendet. Dieser weist den Browser an, keine Third-Party-Cookies zu senden, es sei denn, der Benutzer navigiert von einer anderen Seite zur Cookie-Ursprungsseite. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website zu Ihrer Website navigiert, um beispielsweise die Benutzererfahrung sofort zu personalisieren.

Es ist jedoch nicht hilfreich, wenn Sie siteübergreifende Inhalte in mehreren Sites innerhalb von `<iframe>`s einbetten möchten und auf Third-Party-Cookies für Funktionalitäten angewiesen sind, zum Beispiel im Fall des Anmeldebeispiels, das wir oben betrachtet haben. In solchen Fällen müssen Sie `SameSite=None` explizit setzen, um dem Browser zu ermöglichen, diese Cookies zu übermitteln:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den Zugriff auf das Cookie durch JavaScript (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)) zu deaktivieren. Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe abzuschwächen.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-Party-Cookies

Es gibt mehrere Strategien, die Sites helfen können, bei der Blockierung von Third-Party-Cookies in Browsern Funktionsstörungen zu minimieren:

1. Überprüfen Sie Ihre Nutzung von Third-Party-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Third-Party-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-DevTools überprüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet ebenfalls Probleme mit dem Blockieren von Third-Party-Cookies](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-Party-Cookies, um zu sehen, was nicht funktioniert. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst könnten Sie Ihren Code resilienter gestalten, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-Party-Cookie-Daten nicht verfügbar sind, anstatt komplett nicht zu funktionieren. Befolgen Sie die Prinzipien der {{Glossary("Graceful_degradation", "Anmutige Degradation")}}.
4. Sammeln Sie Daten auf alternative Weise wie Benutzersurveys oder Quizze, oder betrachten Sie bereits vorhandene Daten, um Trends abzuleiten (zum Beispiel Bestellhistorien von Produkten).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder überlegen Sie eine serverseitige Lösung.
6. Wenn Ihre Third-Party-Cookies nur über eine kleine Anzahl verwandter, bekannter Websites verwendet werden, können Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Third-Party-Cookies nur für diese spezifischen Sites zu erlauben. Storage Access fordert den Benutzer auf, die Erlaubnis zu erteilen, um Third-Party-Cookies auf einer Frame-Basis zu verwenden.
   - Wenn Sie bereits eine Lösung unter Verwendung der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihre Implementierung mit dem Verhalten von Chrome zu überprüfen, das in Version 119 volle Unterstützung hinzufügte.
   - Related Website Sets können als progressive Verbesserung der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Sites im Set werden die Benutzer nicht auffordern, die Erlaubnis für den Zugang zu Third-Party-Cookies zu erteilen.
7. Wenn Ihre Third-Party-Cookies auf einer 1:1-Basis mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, aka partitionierte Cookies) verwenden, um Ihre Cookies für partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site anzumelden. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren vorhandenen Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Sites geteilt werden. Beachten Sie, dass CHIPS derzeit nur von Chromium unterstützt wird.

## Ersetzen von Third-Party-Cookies

Mehrere Funktionen stehen Entwicklern zur Verfügung, die auf die Verwendung von Third-Party-Cookies verzichten möchten, um die Privatsphäre der Benutzer zu respektieren und Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle umsetzen. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind berücksichtigenswert, wenn Sie sich auf die Zukunft vorbereiten.

Sie können beginnen, die verschiedenen in Googles [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox)-Projekt verfügbaren Funktionen zu erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur von Chromium unterstützt):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Sites und Diensten anzumelden.
- [Private State Tokens](https://privacysandbox.google.com/protections/private-state-tokens): Ermöglicht Anti-Fraud und Anti-Spam durch den Austausch begrenzter, nicht identifizierender Informationen über Sites hinweg.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Personalisierung von Inhalten.
- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience): Verwenden Sie Daten von einer App oder Website, um beim Besuch einer anderen App oder Website eine Anzeige auszuwählen.
- [Attribution Reporting API](https://privacysandbox.google.com/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Conversions.

## Siehe auch

- [HTTP cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Privacy on the web](/de/docs/Web/Privacy)
