---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

Dieser Artikel erläutert, was Drittanbieter-Cookies sind, beschreibt die mit ihnen verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem Schema (in der Regel `https`) verknüpft und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}}-Attribut `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer ansieht (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als von derselben Website wie die Seite stammend betrachtet und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Website stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _cross-site cookies_ bezeichnet. Dies ist möglicherweise ein treffenderer Name, da _Drittanbieter-Cookies_ auf den Besitz durch ein drittes Unternehmen oder eine Organisation hinweisen. Das Verhalten und die potenziellen Probleme bleiben jedoch gleich, unabhängig davon, ob Sie alle beteiligten Websites besitzen oder nicht. Zum Beispiel könnte eine Website Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer erstmals eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource anfordert, die sich auf derselben Website befindet (zum Beispiel ein eingebettetes Bild, eine Webschriftart oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn auf einer Website ein Link angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oftmals als _Drittanbieter-Inhalte_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die mehr Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die gesetzt werden, wenn Links zu anderen Websites angeklickt werden, werden für eine Vielzahl von Zwecken verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweisenden zurückgezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungszwecke. Zum Beispiel könnten Sie ein Anmelde-Widget haben, das auf mehreren unterschiedlichen, aber verwandten Websites eingebettet ist und ein Cookie über alle Websites teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht erneut auf jeder Website anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies sind:

- Teilen von Benutzerpräferenzen oder Themeneinstellungen über mehrere Websites.
- Sammlung von Analysen über mehrere Websites.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen die Schaltung relevanterer Anzeigen zu ermöglichen.

Lassen Sie uns das oben genannte Anmelde-Widget-Beispiel mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Diskussionsforen der Community (`forum.site`) und den Kundenservice und Rückgaben (`service.site`) hat.

Jede der drei Websites hat ein eingebettetes Anmelde-Widget, das bei `auth.site` gehostet wird, um den Anmeldestatus über die Websites hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Websites anmelden und dabei ein Cookie im Browser für `auth.site` setzen, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Websites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das gesetzt wurde, als der Benutzer sich auf der ersten Website anmeldete. Dieses Cookie kann an den Server gesendet, überprüft und auf der neuen Website sofort angemeldet werden.

![visuelle Darstellung der oben beschriebenen Drittanbieter-Anmeldesystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben beschriebenen Anwendungsfälle klingen harmlos genug. Drittanbieter-Cookies können jedoch auch ohne Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder das Interagieren mit eingebetteten Inhalten in einem `<iframe>` (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte dazu führen, dass Cookies gesetzt werden, die die Informationen eines Benutzers in die Hände von jemandem legen, den er nicht erwartet hat. Diese Informationen könnten verwendet werden, um:

- Benutzer mit zielgerichteten Anzeigen auf der gesamten Internetpräsenz zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Entscheidungen zu treffen, die den Affiliate-Umsatz steigern oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies, die über verschiedene Websites hinweg gesetzt werden, auf denen die Drittanbieter-Inhalte eingebettet sind, kombinieren, um ein detailliertes Profil über den Browserverlauf, Interessen, Gewohnheiten und persönliche Informationen eines Benutzers zu erstellen. Dies kann dazu verwendet werden, gruselige, invasive Nutzererfahrungen zu kreieren, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die auf illegitime Weise gewonnen wurden, werden oft auch an andere Dritte verkauft, wodurch das Problem weiter multipliziert wird.

Gesetze wie die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) in Kalifornien haben geholfen, indem sie es zu einer gesetzlichen Verpflichtung gemacht haben, dass Unternehmen transparent über die von ihnen gesetzten Cookies und die von ihnen gesammelten Informationen sind. Beispiele hierfür sind die Aufforderung an Kunden, sich für eine solche Datensammlung zu entscheiden, ihnen zu erlauben zu sehen, welche Daten ein Unternehmen über sie hält, und diese zu löschen, wenn sie dies wünschen. Es ist jedoch immer noch nicht immer klar für Kunden, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browser-Hersteller wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren und gleichzeitig Ausnahmen und Heuristiken in ihren Quellcode zu integrieren, um langjährige Drittanbieter-Cookie-Probleme mit beliebten Websites zu lösen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Drittanbieter-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der Erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert gesetzt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Drittanbieter-Cookies ein separates Cookie-Behältnis pro Website zuweist, wodurch ein cross-site tracking verhindert wird. Im [Strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Drittanbieter-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); deren Befolgung hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome Drittanbieter-Cookies standardmäßig nur im Inkognito-Modus, obwohl Benutzer sie so einstellen können, dass Drittanbieter-Cookies jederzeit blockiert werden, falls sie dies wünschen, über `chrome://settings`. Google hat begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz von Chrome-Nutzern zu deaktivieren, um die Auswirkungen zu testen, während gleichzeitig Technologien entwickelt werden, um wichtige Anwendungsfälle zu ermöglichen, ohne dass Drittanbieter-Cookies erforderlich sind. Siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Websites und blockiert bekannte schädliche Tracker standardmäßig. Zum Zeitpunkt des Schreibens erforscht Microsoft auch die Möglichkeit, Drittanbieter-Cookies in Edge standardmäßig zu blockieren. Siehe [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Nutzung von Drittanbieter-Cookies von Fall zu Fall in Firefox über die Browsereinstellungen zuzulassen. In Safari ist die Kontrolle jedoch eingeschränkter – Sie können die Nachverfolgungsprävention bei Website-übergreifendem Tracking ausschalten, aber der Zugriff auf Drittanbieter-Cookies pro Frame kann nur auf Codeebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser immer mehr Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Wegen zu suchen, ihre Abhängigkeit von diesen zu reduzieren: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivieren von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server angeben, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Website navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website zu Ihrer Website navigiert, zum Beispiel um die Erfahrung sofort zu personalisieren.

Dies ist jedoch nicht nützlich, wenn Sie über mehrere Webseiten hinweg Inhalte einbetten möchten, die in `<iframe>`s eingebettet sind und auf Drittanbieter-Cookies für die Funktionalität angewiesen sind, wie im oben dargestellten Anmelde-Beispiel. In solchen Fällen müssen Sie `SameSite=None` explizit setzen, um dem Browser zu erlauben, diese Cookies zu verteilen:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass wenn `SameSite=None` gesetzt wird, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das Attribut `HttpOnly` gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe abzumildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Seiten zu helfen, Brüche in Browsern zu minimieren, in denen Drittanbieter-Cookies blockiert werden:

1. Überprüfen Sie Ihre Verwendung von Drittanbieter-Cookies. Cookies müssen das Attribut `SameSite=None` gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder in Ihren Browser-Entwicklertools gespeicherte `SameSite=None`-Cookies überprüfen, zum Beispiel im [Firefox-Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Das Chrome-[Issues-Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet auch Probleme mit der Blockierung von Drittanbieter-Cookies](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was nicht funktioniert. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfangs könnten Sie Ihren Code widerstandsfähiger machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Drittanbieter-Cookie-Daten nicht verfügbar sind, anstatt vollständig zu brechen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "fortschreitenden Degradation")}}.
4. Sammeln Sie Daten auf alternative Weise, wie durch Benutzerumfragen oder Quizze, oder untersuchen Sie vorhandene Daten, um Trends abzuleiten (zum Beispiel Bestellhistorien von Produkten).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder ziehen Sie eine serverseitige Lösung in Betracht.
6. Wenn Ihre Drittanbieter-Cookies nur über eine kleine Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Drittanbieter-Cookies nur für diese speziellen Seiten zu erlauben. Die Storage Access API fordert den Benutzer auf, die Erlaubnis zu erteilen, dass eine Seite Drittanbieter-Cookies nutzen darf, basierend auf jedem einzelnen Frame.
   - Wenn Sie bereits eine Lösung mithilfe der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihre Implementierung gegenüber dem Verhalten in Chrome zu überprüfen, das in Version 119 auf vollständige Unterstützung aktualisiert wurde.
   - Related Website Sets kann als progressive Verbesserung der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set werden die Benutzer nicht um Erlaubnis bitten, um auf Drittanbieter-Cookies zuzugreifen.
7. Wenn Ihre Drittanbieter-Cookies auf einer 1:1-Basis mit den obersten Seiten, auf denen sie generiert werden, verwendet werden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch partitionierte Cookies genannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Behälter pro oberster Website zu übertragen. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren bestehenden Website-übergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Seiten geteilt werden. Beachten Sie, dass CHIPS derzeit nur von Chromium unterstützt wird.

## Ersetzen von Drittanbieter-Cookies

Es stehen mehrere Funktionen zur Verfügung, um Entwicklern zu helfen, die Drittanbieter-Cookies nicht mehr verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie verwandte Anwendungsfälle weiter umsetzen. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind eine Überlegung wert, wenn Sie damit beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen in Googles [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox) Projekt verfügbaren Funktionen zu erkunden, um zu sehen, ob sie in Ihren Anwendungsfall passen (sie sind derzeit experimentell und nur in Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://privacysandbox.google.com/protections/private-state-tokens): Ermöglichen Anti-Betrug und Anti-Spam, indem begrenzte, nicht identifizierende Informationen zwischen Websites ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Content-Personalisierung.
- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience): Verwenden Sie Daten aus einer App oder Website, um eine Anzeige auszuwählen, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://privacysandbox.google.com/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Conversions.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
