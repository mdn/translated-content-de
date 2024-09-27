---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten Cross-Site-Dokumenten genutzt werden, um zu überprüfen, ob sie Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und [nicht partitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) haben, und um bei fehlendem Zugriff diesen anzufordern. Wir werden kurz ein gängiges Szenario zum Speichern von Zugriff betrachten.

> [!NOTE]
> Wenn wir im Kontext der Storage Access API von Third-Party-Cookies sprechen, meinen wir implizit [_nicht partitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Third-Party-Cookies.

## Nutzungshinweise

Die Storage Access API ist dazu konzipiert, eingebetteten Inhalten den Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand anzufordern — die meisten modernen Browser blockieren diesen Zugriff standardmäßig, um die Privatsphäre der Nutzer zu schützen. Da eingebettete Inhalte nicht wissen, wie sich ein Browser in dieser Hinsicht verhalten wird, ist es am besten, stets zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Zugriff auf den Speicher hat, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser oft ein leeres Cookie-Jar zurückgeben, wenn der Zugriff auf Third-Party-Cookies blockiert ist.

Im Beispiel unten zeigen wir, wie ein eingebettetes Cross-Site-{{htmlelement("iframe")}} auf Third-Party-Cookies und nicht partitionierten Zustand zugreifen kann, unter einer Browser-Speicherzugriffsrichtlinie, die sonst den Zugriff darauf blockieren würde.

## Erlauben eines sandboxed \<iframe>, die API zu verwenden

Zunächst muss, wenn das `<iframe>` sandboxed ist, die einbettende Website das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzufügen, um erfolgreiche Anfragen der Storage Access API zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu ermöglichen, dass ein Skript ausgeführt wird, um die API aufzurufen und in einem Ursprung auszuführen, der Cookies und Zustand haben kann.

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern des Speicherzugriffs

Kommen wir nun zum im eingebetteten Dokument ausgeführten Code. In diesem Code:

1. Wir verwenden zuerst Feature-Detection (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir unseren Code aus, der trotzdem auf Cookies zugreift, in der Hoffnung, dass er funktioniert. Er sollte so kodiert sein, dass er mit solchen Eventualitäten umgehen kann.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet dies, dass dieses {{htmlelement("iframe")}} bereits Zugriff hat, und wir können unseren Code, der auf Cookies und Zustand zugreift, sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu überprüfen, ob die Berechtigung zum Zugriff auf Third-Party-Cookies und nicht partitionierten Zustand bereits erteilt wurde (z. B. für eine andere gleichseitige Einbettung). Wir umschließen diesen gesamten Abschnitt in einen [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, weil [einige Browser die Berechtigung `"storage-access"` nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was den `query()`-Aufruf zum Auslösen bringen kann. Wenn er auslöst, berichten wir das in der Konsole und versuchen, den Cookie-Code trotzdem auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer Zeit spart, und dann können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Eingabeaufforderung beim Benutzer auslösen. Wenn dieser Aufruf gelöst wird, können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Benutzer unsere Anfragen zum Zugriff auf Third-Party-Cookies oder nicht partitionierten Zustand abgelehnt, und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit ein Benutzerinteraktion wie einen Tastendruck oder Klick ([transiente Aktivierung](/de/docs/Glossary/transient_activation)), oder wenn die Berechtigung zuvor bereits erteilt wurde. Wenn die Berechtigung nicht zuvor erteilt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines benutzergestenbasierten Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das nur in Chrome verfügbare [Feature für verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) kann als progressive Verbesserung verstanden werden, die zusammen mit der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßig Drittanbieter-Cookie- und nicht partitionierten Zustandszugriff zwischen Websites im selben Satz. Dies bedeutet, dass der übliche Workflow zur Eingabeaufforderung für Benutzerrechte, wie oben beschrieben, entfällt, was eine benutzerfreundlichere Erfahrung für Benutzer von Websites im Satz bedeutet.

## Anfordern des Speicherzugriffs von der Top-Level-Website im Namen eingebetteter Ressourcen

Die oben dargestellten Features der Storage Access API erlauben es einem eingebetteten Dokument, den eigenen Third-Party-Cookie-Zugriff anzufordern. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung der Storage Access API, welche es Top-Level-Websites ermöglicht, im Namen spezifischer verwandter Ursprünge Speicherzugriff anzufordern.

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Implementierung der Storage Access API auf Top-Level-Websites, die Cross-Site-Bilder oder -Skripte verwenden, die Cookies benötigen. Sie kann den Third-Party-Cookie-Zugriff für Cross-Site-Ressourcen direkt aktivieren, die in die Top-Level-Site eingebettet sind und die nicht in der Lage sind, eigenen Speicherzugriff anzufordern, z.B. durch {{htmlelement("img")}} oder {{htmlelement("script")}} Elemente.

Für `requestStorageAccessFor()` müssen sowohl die aufrufende Top-Level-Seite als auch die eingebettete Ressource, für die Speicherzugriff angefordert wird, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Typische Verwendung von `requestStorageAccessFor()` sieht so aus (diesmal im regulären Promise-Stil geschrieben statt async/await):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Im Unterschied zu `requestStorageAccess()` überprüft Chrome bei `requestStorageAccessFor()` nicht, ob in den letzten 30 Tagen eine Interaktion im Top-Level-Dokument stattgefunden hat, da sich der Benutzer bereits auf der Seite befindet. Siehe [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanfragen, die im Namen eines anderen Ursprungs gestellt werden, ist der Berechtigungsname anders als der übrige Teil der Storage Access API: `"top-level-storage-access"` statt `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob der Ursprung zuvor bereits Berechtigungen erteilt bekommen hat oder ob der Cookie-Zugriff noch angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir mit der Nutzung von Cookies beginnen; `requestStorageAccessFor()` wurde bereits aufgerufen, daher ist kein erneuter Aufruf erforderlich.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion, wie einem Tastendruck, aufrufen.

Nachdem die `"top-level-storage-access"`-Berechtigung gewährt wurde, werden Cross-Site-Anfragen inkl. Cookies gesendet, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) beinhalten, daher möchten Seiten möglicherweise warten, bevor eine Anfrage ausgelöst wird. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
